import React from 'react';
import PropTypes from 'prop-types';
import ScheduleTalk from '../ScheduleTalk';
import {
  faUtensils,
  faCoffee,
  faBeer,
  faClipboardList,
  faMicrophoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

import './index.scss';

const defaultScheduleBreaks = [
  {
    start: moment('11:10 AM', 'HH:mm A'),
    node: {
      title: 'Breakfast',
      id: 'breakfast',
      icon: faCoffee,
    },
  },
  {
    start: moment('01:00 PM', 'HH:mm A'),
    node: {
      title: 'Lauch',
      id: 'launch',
      icon: faUtensils,
    },
  },
  {
    start: moment('03:40 PM', 'HH:mm A'),
    node: {
      title: 'Break',
      id: 'break',
      icon: faBeer,
    },
  },
  {
    start: moment('04:00 PM', 'HH:mm A'),
    node: {
      title: 'Panel',
      id: 'panel',
      icon: faMicrophoneAlt,
    },
  },
  {
    start: moment('04:50 PM', 'HH:mm A'),
    node: {
      title: 'Lightning Talks',
      id: 'lt',
      icon: faMicrophoneAlt,
    },
  },
];

const customDayEvents = day => {
  switch (day) {
    case 1:
      return [
        ...defaultScheduleBreaks,
        {
          start: moment('08:00 AM', 'HH:mm A'),
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
      ];
      break;

    default:
      return defaultScheduleBreaks;
      break;
  }
};

const ScheduleTalksList = ({ talks, room, dayNumber }) => {
  const orderedTalks = talks.concat(customDayEvents(dayNumber)).sort((a, b) => {
    return a.start > b.start;
  });

  return (
    <div className="schedule-talk-list">
      {orderedTalks.map(talk => (
        <ScheduleTalk
          start={talk.start}
          talk={talk.node}
          key={talk.node.id + dayNumber + room}
        />
      ))}
    </div>
  );
};

ScheduleTalksList.propTypes = {
  talks: PropTypes.array,
  room: PropTypes.string,
  dayNumber: PropTypes.number,
};

export default ScheduleTalksList;
