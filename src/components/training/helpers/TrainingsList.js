import React from 'react';
import { array, object, string } from 'prop-types';
import { Link } from 'gatsby';
import HrSVG from '../../svg/HrSVG';
import HrAltSVG from '../../svg/HrAltSVG';

const TrainingDetails = ({
  audience,
  description,
  duration,
  level,
  related_people,
  title,
  _path,
  people,
  index,
}) => {
  const relatedIds =
    related_people && related_people.length
      ? related_people.map(person => person._id)
      : [];
  const relatedNodes = people.filter(({ node }) =>
    relatedIds.includes(node.id),
  );
  let alt = index % 2 == 0;
  return [
    alt ? <HrAltSVG /> : <HrSVG />,
    <div key="training-details" className="training-details">
      <div className="block">
        <Link to={_path}>
          <h3>{title}</h3>
        </Link>
        {related_people.length ? (
          <div className="trainers">
            by{' '}
            {relatedNodes.length
              ? relatedNodes.map(({ node }, idx) => (
                  <React.Fragment key={node.id}>
                    <Link to={node._path}>{node.title}</Link>
                    {idx < relatedNodes.length - 1 && ', '}
                  </React.Fragment>
                ))
              : ''}
          </div>
        ) : (
          ''
        )}
      </div>
      {description && description.length ? (
        <div className="block training-description">
          <p>{description}</p>
        </div>
      ) : (
        ''
      )}
      <div className="block additional-infos">
        <div>
          <span>Duration:</span> <strong>{duration}</strong>
        </div>
        <div>
          <span>Audience:</span> <strong>{audience.join(', ')}</strong>
        </div>
        <div>
          <span>Level:</span> <strong>{level}</strong>
        </div>
      </div>
    </div>,
  ];
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
      ? data.map(({ node }, index) => (
          <TrainingDetails
            people={people}
            index={index}
            key={node.UID}
            {...node}
          />
        ))
      : ''}
  </div>
);

TrainingsList.propTypes = {
  data: array,
  people: array,
};

export default TrainingsList;
