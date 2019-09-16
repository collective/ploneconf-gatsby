import React from 'react';
import PropTypes from 'prop-types';
import ScheduleTalk from '../ScheduleTalk';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faUtensils,
  faCoffee,
  faClipboardList,
  faMicrophoneAlt,
  faChalkboardTeacher,
} from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

import './index.scss';

const defaultScheduleBreaks = [
  {
    start: moment('10:40 AM', 'HH:mm A'),
    end: moment('11:00 AM', 'HH:mm A'),
    node: {
      title: 'Breakfast',
      id: 'breakfast',
      icon: faCoffee,
      room: 'all',
    },
  },
  {
    start: moment('12:50 PM', 'HH:mm A'),
    end: moment('14:00 PM', 'HH:mm A'),
    node: {
      title: 'Launch',
      id: 'launch',
      icon: faUtensils,
      room: 'all',
    },
  },
  {
    start: moment('03:40 PM', 'HH:mm A'),
    end: moment('04:00 PM', 'HH:mm A'),
    node: {
      title: 'Break',
      id: 'break',
      icon: faCoffee,
      room: 'all',
    },
  },
];

const customDayEvents = day => {
  /* eslint-disable indent */
  switch (day) {
    case 1:
      return [
        ...defaultScheduleBreaks,
        {
          start: moment('08:30 AM', 'HH:mm A'),
          end: moment('09:30 AM', 'HH:mm A'),
          node: {
            title: 'Registration',
            id: 'registration',
            icon: faClipboardList,
            room: 'all',
          },
        },
        {
          start: moment('09:30 AM', 'HH:mm A'),
          end: moment('09:50 AM', 'HH:mm A'),
          node: {
            title: 'Welcome',
            id: 'welcome',
            icon: faMicrophoneAlt,
            room: 'all',
          },
        },
        {
          start: moment('04:00 PM', 'HH:mm A'),
          end: moment('05:00 PM', 'HH:mm A'),
          node: {
            title: 'Panel: Frameworks battle',
            id: 'panel-frameworks',
            icon: faChalkboardTeacher,
            room: 'Apollo 1',
          },
        },
        {
          start: moment('05:00 PM', 'HH:mm A'),
          end: moment('08:00 PM', 'HH:mm A'),
          node: {
            title: 'Lightning Talks',
            id: 'lt',
            icon: faMicrophoneAlt,
            room: 'Apollo 1',
          },
        },
      ];

    case 2:
      return [
        ...defaultScheduleBreaks,
        {
          start: moment('08:30 AM', 'HH:mm A'),
          end: moment('09:15 AM', 'HH:mm A'),
          node: {
            title: 'Registration',
            id: 'registration',
            icon: faClipboardList,
            room: 'all',
          },
        },
        {
          start: moment('09:15 AM', 'HH:mm A'),
          end: moment('09:30 AM', 'HH:mm A'),
          node: {
            title: 'Welcome',
            id: 'welcome',
            icon: faMicrophoneAlt,
            room: 'all',
          },
        },
        {
          start: moment('04:00 PM', 'HH:mm A'),
          end: moment('05:00 PM', 'HH:mm A'),
          node: {
            title: 'Panel: Ask Me Anything on Volto',
            id: 'panel-ama-volto',
            icon: faChalkboardTeacher,
            room: 'Apollo 1',
          },
        },
        {
          start: moment('05:00 PM', 'HH:mm A'),
          end: moment('06:00 PM', 'HH:mm A'),
          node: {
            title: 'Lightning Talks',
            id: 'lt',
            icon: faMicrophoneAlt,
            room: 'Apollo 1',
          },
        },
      ];

    case 3:
      return [
        ...defaultScheduleBreaks,
        {
          start: moment('08:30 AM', 'HH:mm A'),
          end: moment('09:15 AM', 'HH:mm A'),
          node: {
            title: 'Registration',
            id: 'registration',
            icon: faClipboardList,
            room: 'all',
          },
        },
        {
          start: moment('09:15 AM', 'HH:mm A'),
          end: moment('09:30 AM', 'HH:mm A'),
          node: {
            title: 'Welcome',
            id: 'welcome',
            icon: faMicrophoneAlt,
            room: 'all',
          },
        },
        {
          start: moment('04:00 PM', 'HH:mm A'),
          end: moment('05:00 PM', 'HH:mm A'),
          node: {
            title: 'Panel: Future of Plone',
            id: 'panel-future-plone',
            icon: faChalkboardTeacher,
            room: 'Apollo 1',
          },
        },
        {
          start: moment('05:00 PM', 'HH:mm A'),
          end: moment('06:00 PM', 'HH:mm A'),
          node: {
            title: 'Lightning Talks',
            id: 'lt',
            icon: faMicrophoneAlt,
            room: 'Apollo 1',
          },
        },
        {
          start: moment('06:00 PM', 'HH:mm A'),
          end: moment('06:15 PM', 'HH:mm A'),
          node: {
            title: 'Greetings and announcement of the Plone Conference 2021.',
            id: 'gr',
            icon: faMicrophoneAlt,
            room: 'all',
          },
        },
      ];

    default:
      return defaultScheduleBreaks;
  }
  /* eslint-enable indent */
};

const ScheduleTalksList = ({ talks, dayNumber }) => {
  let orderedTalks = talks.concat(customDayEvents(dayNumber)).sort((a, b) => {
    let _a = a.start.minute() + a.start.hours() * 60;
    let _b = b.start.minute() + b.start.hours() * 60;
    return _a > _b ? 1 : -1;
  });
  // console.log('talks', orderedTalks);

  var rooms = orderedTalks.reduce((acc, talk) => {
    let room = talk.node.room;

    if (!acc[room]) {
      acc[talk.node.room] = [];
    }
    return acc;
  }, {});

  //Object.keys(rooms).sort(); //ritorna un array dei nomi delle room in ordine alfabetico

  //console.log('rooms', rooms);

  let rows = orderedTalks.reduce((acc, talk) => {
    let start = talk.start.format('HH:mm');

    if (!acc[start]) {
      acc[start] = {
        icon: talk.node.icon ? talk.node.icon : faMicrophoneAlt,
        rooms: {},
      };
    }
    if (!acc[start].rooms[talk.node.room]) {
      acc[start].rooms[talk.node.room] = [];
    }

    acc[start].rooms[talk.node.room].push(talk);
    return acc;
  }, {});
  // console.log('rows', rows);

  return (
    <div className="schedule-talk-list">
      {/*<div className="schedule-row row-room-names" key="rows">
        <div className="room-names">
          {Object.keys(rooms)
            .sort()
            .map(
              room =>
                room != 'all' && (
                  <div className="room" key={room + 'cols'}>
                    {room}
                  </div>
                ),
            )}
        </div>
                </div>*/}
      {Object.keys(rows).map(row => (
        <div className="schedule-row" key={row + 'row'}>
          <div className="image-wrapper">
            <div className="thumb user-image">
              <FontAwesomeIcon icon={rows[row].icon} />
            </div>
            <span className="row-time">{row}</span>
          </div>

          <div className="rooms">
            {Object.keys(rows[row].rooms)
              .sort()
              .map(room => (
                <div className={'room ' + room} key={row + 'row' + room}>
                  {rows[row].rooms[room].map(talk => (
                    <ScheduleTalk
                      start={talk.start}
                      end={talk.end}
                      talk={talk.node}
                      key={talk.node.id + dayNumber}
                    />
                  ))}
                </div>
              ))}
          </div>
          {/*<ScheduleTalk
            start={talk.start}
            end={talk.end}
            talk={talk.node}
            key={talk.node.id + dayNumber}
          />*/}
        </div>
      ))}
    </div>
  );
};

ScheduleTalksList.propTypes = {
  talks: PropTypes.array,
  dayNumber: PropTypes.number,
};

export default ScheduleTalksList;
