import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'gatsby';

import './index.scss';

const ScheduleTalk = ({ start, end, talk }) => (
  <div className="talk">
    {talk.room != 'all' && (
      <p className="talk-room">
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        {talk.room}
      </p>
    )}
    <p className="talk-timeslot">
      <FontAwesomeIcon icon={faClock} />
      <span>
        {start.format('HH:mm')} {end && ' - ' + end.format('HH:mm')}
      </span>
    </p>
    <div className="talk-data">
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
        <div className="talk-speakers">
          {talk.is_keynote && 'Keynote by '}
          {talk.speakers.map((speaker, idx) => (
            <React.Fragment key={speaker.id}>
              {idx > 0 && <span>, </span>}
              <Link to={speaker._path} title="details">
                {speaker.title}
              </Link>
            </React.Fragment>
          ))}
        </div>
      )}
      <div className="talk-descr">
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
      </div>
    </div>
  </div>
);

ScheduleTalk.propTypes = {
  start: PropTypes.object,
  end: PropTypes.object,
  talk: PropTypes.object,
};

export default ScheduleTalk;
