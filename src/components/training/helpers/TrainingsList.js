import React from 'react';
import { array, object, string } from 'prop-types';
import { Link } from 'gatsby';

const TrainingDetails = ({
  audience,
  description,
  duration,
  level,
  related_people,
  title,
  _path,
  people,
}) => {
  const relatedIds =
    related_people && related_people.length
      ? related_people.map(person => person._id)
      : [];
  const relatedNodes = people.filter(({ node }) =>
    relatedIds.includes(node.id),
  );
  return (
    <div className="training-details">
      <Link to={_path}>
        <h4>{title}</h4>
      </Link>
      {related_people.length ? (
        <div className="trainers">
          by{' '}
          {relatedNodes.length
            ? relatedNodes.map(({ node }) => (
                <React.Fragment key={node.id}>
                  <Link to={node._path}>{node.title}</Link>{' '}
                </React.Fragment>
              ))
            : ''}
        </div>
      ) : (
        ''
      )}
      {description && description.length ? (
        <p className="training-description">{description}</p>
      ) : (
        ''
      )}
      <div className="additional-infos">
        <span>
          Duration: <strong>{duration}</strong>
        </span>
        <span>
          Audience: <strong>{audience.join(', ')}</strong>
        </span>
        <span>
          Level: <strong>{level}</strong>
        </span>
      </div>
    </div>
  );
};

TrainingDetails.propTypes = {
  audience: array,
  description: string,
  duration: string,
  level: string,
  related_people: array,
  room: string,
  title: string,
  _path: string,
  people: array,
};

const TrainingsList = ({ data, people }) => (
  <div className="trainings">
    {data && data.length
      ? data.map(({ node }) => (
          <TrainingDetails people={people} key={node.UID} {...node} />
        ))
      : ''}
  </div>
);

TrainingsList.propTypes = {
  data: array,
  people: array,
};

export default TrainingsList;
