import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'gatsby';
import PersonImage from '../../people/PersonImage';

import './index.scss';

const ScheduleTalk = ({ start, end, talk }) => (
  <div className="talk-data">
    <p className="talk-timeslot">
      <FontAwesomeIcon icon={faClock} />
      <span>
        {start.format('HH:mm A')} {end && ' - ' + end.format('HH:mm A')}
      </span>
    </p>
    <div className="data">
      {!talk._path && <h4>{talk.title}</h4>}
      {talk._path && (
        <h4 className="talk-title">
          <Link to={talk._path} title="details">
            {talk.title}
          </Link>
          {talk.is_keynote && <span className="label">KEYNOTE</span>}
        </h4>
      )}
      {talk.speakers && (
        <div className="speakers">
          {talk.is_keynote && 'Keynote by '}
          {talk.speakers.map(speaker => (
            <Link to={speaker._path} title="details" key={speaker.id}>
              {speaker.title}
            </Link>
          ))}
        </div>
      )}
      <p className="description">
        {talk.room}
        {talk.topic && (
          <div>
            <strong>Topic: </strong> {talk.topic.join(', ')}
          </div>
        )}
        {talk.level && (
          <div>
            <strong>Level: </strong> {talk.level}
          </div>
        )}
        {talk.audience && (
          <div>
            <strong>Audience: </strong> {talk.audience.join(', ')}
          </div>
        )}

        {/*{talk.description}*/}
      </p>
    </div>
  </div>
);

ScheduleTalk.propTypes = {
  start: PropTypes.object,
  end: PropTypes.object,
  talk: PropTypes.object,
};

export default ScheduleTalk;
