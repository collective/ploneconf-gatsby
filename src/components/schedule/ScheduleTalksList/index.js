import React from 'react';
import PropTypes from 'prop-types';
import ScheduleTalk from '../ScheduleTalk';
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
    start: moment('10:25 AM', 'HH:mm A'),
    node: {
      title: 'Breakfast',
      id: 'breakfast',
      icon: faCoffee,
    },
  },
  {
    start: moment('12:40 PM', 'HH:mm A'),
    node: {
      title: 'Lauch',
      id: 'launch',
      icon: faUtensils,
    },
  },
  {
    start: moment('04:00 PM', 'HH:mm A'),
    node: {
      title: 'Break',
      id: 'break',
      icon: faCoffee,
    },
  },
];

const customDayEvents = (day, room) => {
  if (room != 0) {
    return defaultScheduleBreaks;
  }

  /* eslint-disable indent */
  switch (day) {
    case 1:
      return [
        ...defaultScheduleBreaks,
        {
          start: moment('08:30 AM', 'HH:mm A'),
          node: {
            title: 'Registration',
            id: 'registration',
            icon: faClipboardList,
          },
        },
        {
          start: moment('09:30 AM', 'HH:mm A'),
          node: {
            title: 'Welcome',
            id: 'welcome',
            icon: faMicrophoneAlt,
          },
        },
        {
          start: moment('04:30 PM', 'HH:mm A'),
          node: {
            title: 'Panel: Frameworks',
            id: 'panel-frameworks',
            icon: faChalkboardTeacher,
          },
        },
        {
          start: moment('05:30 PM', 'HH:mm A'),
          node: {
            title: 'Lightning Talks',
            id: 'lt',
            icon: faMicrophoneAlt,
          },
        },
      ];

    case 2:
      return [
        ...defaultScheduleBreaks,
        {
          start: moment('04:30 PM', 'HH:mm A'),
          node: {
            title: 'Panel: Ask Me Anything on Volto',
            id: 'panel-ama-volto',
            icon: faChalkboardTeacher,
          },
        },
        {
          start: moment('05:30 PM', 'HH:mm A'),
          node: {
            title: 'Lightning Talks',
            id: 'lt',
            icon: faMicrophoneAlt,
          },
        },
      ];

    case 3:
      return [
        ...defaultScheduleBreaks,
        {
          start: moment('04:30 PM', 'HH:mm A'),
          node: {
            title: 'Panel: Future of Plone',
            id: 'panel-future-plone',
            icon: faChalkboardTeacher,
          },
        },
        {
          start: moment('05:30 PM', 'HH:mm A'),
          node: {
            title: 'Lightning Talks',
            id: 'lt',
            icon: faMicrophoneAlt,
          },
        },
      ];

    default:
      return defaultScheduleBreaks;
  }
  /* eslint-enable indent */
};

const ScheduleTalksList = ({ talks, roomIndex, dayNumber }) => {
  let orderedTalks = talks
    .concat(customDayEvents(dayNumber, roomIndex))
    .sort((a, b) => {
      return a.start > b.start ? 1 : -1;
    });

  return (
    <div className="schedule-talk-list">
      {orderedTalks.map(talk => (
        <ScheduleTalk
          start={talk.start}
          end={talk.end}
          talk={talk.node}
          key={talk.node.id + dayNumber + roomIndex}
        />
      ))}
    </div>
  );
};

ScheduleTalksList.propTypes = {
  talks: PropTypes.array,
  roomIndex: PropTypes.number,
  dayNumber: PropTypes.number,
};

export default ScheduleTalksList;
