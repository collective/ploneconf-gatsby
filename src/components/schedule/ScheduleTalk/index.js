import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'gatsby';
import PersonImage from '../../people/PersonImage';

import './index.scss';

const ScheduleTalk = ({ start, talk }) => (
  <div className={`schedule-talk ${talk.icon ? 'break' : ''}`}>
    <div className="image-wrapper">
      {talk.speaker && (
        <PersonImage
          person={talk.speaker}
          size="thumb"
          viewDefaultImage={true}
        />
      )}
      {talk.icon && (
        <div className="thumb user-image">
          <FontAwesomeIcon icon={talk.icon} />
        </div>
      )}
    </div>
    <div className="talk-data">
      <p className="talk-timeslot">
        <FontAwesomeIcon icon={faClock} />
        <span>{start.format('HH:mm A')}</span>
      </p>
      <div className="data">
        {!talk._path && <h4>{talk.title}</h4>}
        {talk._path && (
          <h4 className="talk-title">
            <Link to={talk._path} title="details">
              {talk.title}
            </Link>
          </h4>
        )}
        <p className="description">{talk.description}</p>
        {talk.speakers && (
          <div className="speakers">
            {talk.speakers.map(speaker => (
              <Link to={speaker._path} title="details" key={speaker._id}>
                {speaker.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
);

ScheduleTalk.propTypes = {
  start: PropTypes.object,
  talk: PropTypes.object,
};

export default ScheduleTalk;
