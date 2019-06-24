import React from 'react';
import { string } from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import PersonDetailsDate from '../PersonDetailsDate';

const TrainingDetails = ({
  UID,
  duration,
  end,
  id,
  related_people,
  start,
  title,
  _path,
}) => (
  <div className="training-detail">
    <PersonDetailsDate start={start} end={end} />
    <div className="training-slot">
      <h4>TRAINING</h4>
      <FontAwesomeIcon icon={faChalkboardTeacher} />{' '}
      <Link to={_path} title="training details">
        {title}
      </Link>
    </div>
  </div>
);

const PersonTrainings = ({ id }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allPloneTraining {
            edges {
              node {
                ...TrainingFragment
              }
            }
          }
        }
      `}
      render={({ allPloneTraining }) => {
        const trainings =
          allPloneTraining.edges && allPloneTraining.edges.length
            ? allPloneTraining.edges
            : [];
        if (trainings.length === 0) {
          return '';
        }
        const filteredTrainings = trainings.filter(({ node }) => {
          const trainers = node.related_people.filter(
            trainer => trainer._id === id,
          );
          return trainers.length !== 0;
        });
        if (filteredTrainings.length === 0) {
          return '';
        }
        return (
          <div className="person-trainings">
            {filteredTrainings.map(({ node }) => (
              <TrainingDetails key={node.UID} {...node} />
            ))}
          </div>
        );
      }}
    />
  );
};

PersonTrainings.propTypes = {
  id: string.isRequired,
};

export default PersonTrainings;
