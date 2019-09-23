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
import { format, getMinutes, getHours } from 'date-fns';

import './index.scss';

const defaultScheduleBreaks = [
  {
    start: '2019-10-23T10:40:00+02:00',
    end: '2019-10-23T11:00:00+02:00',
    node: {
      title: 'Breakfast',
      id: 'breakfast',
      icon: faCoffee,
      room: 'all',
    },
  },
  {
    start: '2019-10-23T12:50:00+02:00',
    end: '2019-10-23T14:00:00+02:00',
    node: {
      title: 'Lunch',
      id: 'lunch',
      icon: faUtensils,
      room: 'all',
    },
  },
  {
    start: '2019-10-23T15:40:00+02:00',
    end: '2019-10-23T16:00:00+02:00',
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
          start: '2019-10-23T08:30:00+02:00',
          end: '2019-10-23T09:30:00+02:00',
          node: {
            title: 'Registration',
            id: 'registration',
            icon: faClipboardList,
            room: 'all',
          },
        },
        {
          start: '2019-10-23T09:30:00+02:00',
          end: '2019-10-23T09:50:00+02:00',
          node: {
            title: 'Welcome',
            id: 'welcome',
            icon: faMicrophoneAlt,
            room: 'all',
          },
        },
        {
          start: '2019-10-23T16:00:00+02:00',
          end: '2019-10-23T17:00:00+02:00',
          node: {
            title: 'Panel: Frameworks comparison',
            id: 'panel-frameworks',
            icon: faChalkboardTeacher,
            room: 'Apollo 1',
          },
        },
        {
          start: '2019-10-23T17:00:00+02:00',
          end: '2019-10-23T18:00:00+02:00',
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
          start: '2019-10-24T08:30:00+02:00',
          end: '2019-10-24T09:15:00+02:00',
          node: {
            title: 'Registration',
            id: 'registration',
            icon: faClipboardList,
            room: 'all',
          },
        },
        {
          start: '2019-10-24T09:15:00+02:00',
          end: '2019-10-24T09:30:00+02:00',
          node: {
            title: 'Welcome',
            id: 'welcome',
            icon: faMicrophoneAlt,
            room: 'all',
          },
        },
        {
          start: '2019-10-24T16:00:00+02:00',
          end: '2019-10-24T17:00:00+02:00',
          node: {
            title: 'Panel: Ask Me Anything on Volto',
            id: 'panel-ama-volto',
            icon: faChalkboardTeacher,
            room: 'Apollo 1',
          },
        },
        {
          start: '2019-10-24T17:00:00+02:00',
          end: '2019-10-24T18:00:00+02:00',
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
          start: '2019-10-25T08:30:00+02:00',
          end: '2019-10-25T09:15:00+02:00',
          node: {
            title: 'Registration',
            id: 'registration',
            icon: faClipboardList,
            room: 'all',
          },
        },
        {
          start: '2019-10-25T09:15:00+02:00',
          end: '2019-10-25T09:30:00+02:00',
          node: {
            title: 'Welcome',
            id: 'welcome',
            icon: faMicrophoneAlt,
            room: 'all',
          },
        },
        {
          start: '2019-10-25T16:00:00+02:00',
          end: '2019-10-25T17:00:00+02:00',
          node: {
            title: 'Panel: Future of Plone',
            id: 'panel-future-plone',
            icon: faChalkboardTeacher,
            room: 'Apollo 1',
          },
        },
        {
          start: '2019-10-25T17:00:00+02:00',
          end: '2019-10-25T18:00:00+02:00',
          node: {
            title: 'Lightning Talks',
            id: 'lt',
            icon: faMicrophoneAlt,
            room: 'Apollo 1',
          },
        },
        {
          start: '2019-10-25T18:00:00+02:00',
          end: '2019-10-25T18:30:00+02:00',
          node: {
            title: 'Greetings and announcement of the Plone Conference 2020',
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
    const aStart = new Date(a.start);
    const bStart = new Date(b.start);
    let _a = getMinutes(aStart) + getHours(aStart) * 60;
    let _b = getMinutes(bStart) + getHours(bStart) * 60;
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
    const talkStart = new Date(talk.start);
    let start = format(talkStart, 'HH:mm');

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
