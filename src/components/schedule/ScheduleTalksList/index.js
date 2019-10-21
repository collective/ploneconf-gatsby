import React from 'react';
import PropTypes from 'prop-types';
import ScheduleTalk from '../ScheduleTalk';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getMinutes, getHours } from 'date-fns';
import { formatToTimeZone } from 'date-fns-timezone';
import cx from 'classnames';

import {
  faUtensils,
  faCoffee,
  faClipboardList,
  faMicrophoneAlt,
  faChalkboardTeacher,
  faGlassCheers,
} from '@fortawesome/free-solid-svg-icons';

import './index.scss';

const defaultScheduleBreaks = [
  {
    start: '2019-10-23T10:40:00+02:00',
    end: '2019-10-23T11:00:00+02:00',
    node: {
      title: 'Coffee break',
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
          start: '2019-10-23T11:50:00+02:00',
          end: '2019-10-23T12:20:00+02:00',
          node: {
            title: 'Open space',
            id: 'open-space-1',
            room: 'Apollo 3',
          },
        },
        {
          start: '2019-10-23T16:00:00+02:00',
          end: '2019-10-23T17:00:00+02:00',
          node: {
            title: 'Panel: Future of Plone',
            id: 'panel-future-plone',
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
          start: '2019-10-25T10:15:00+02:00',
          end: '2019-10-25T10:40:00+02:00',
          node: {
            title: 'Open space',
            id: 'open-space-3',
            room: 'Apollo 2',
          },
        },
        {
          start: '2019-10-25T16:00:00+02:00',
          end: '2019-10-25T17:00:00+02:00',
          node: {
            title: 'Panel: Frameworks comparison',
            id: 'panel-frameworks',
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
        {
          start: '2019-10-25T19:00:00+02:00',
          end: null,
          node: {
            title: 'Party at the Castle',
            id: 'gr',
            icon: faGlassCheers,
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

  let rows = orderedTalks.reduce((acc, talk) => {
    const talkStart = new Date(talk.start);
    let start = formatToTimeZone(talkStart, 'HH:mm', {
      timeZone: 'Europe/Berlin',
    });

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
                <div
                  className={cx(['room', room.replace(/\s/, '-')])}
                  key={row + 'row' + room.replace(/\s/, '-')}
                >
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
