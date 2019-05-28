import React from 'react';
import { array, object, string } from 'prop-types';
import { graphql } from 'gatsby';
import cx from 'classnames';

import TextBlock from '../helpers/TextBlock';
import TrainerWrapper from '../helpers/TrainerWrapper';
import StandardHeader from '../../StandardHeader';

import './index.scss';

const Training = ({ data, people, cssClass, images = [], files = [] }) => {
  const {
    what_learn,
    things_to_bring,
    prerequisites,
    room,
    title,
    description,
    docs_link,
    audience,
    level,
    duration,
    related_people,
  } = data;
  const trainer_ids = related_people.map(person => person._id);
  const trainers = people.edges.filter(({ node }) =>
    trainer_ids.includes(node.id),
  );
  let trainersElement = '';
  if (trainers.length) {
    trainersElement = (
      <div className="trainers">
        <strong>Trainers</strong>
        {trainers.map(({ node }) => {
          return <TrainerWrapper {...node} key={node.UID} />;
        })}
      </div>
    );
  }

  return (
    <React.Fragment>
      <StandardHeader title={data.title} description={data.description} />
      <article key={data._id} className={cx('training-content', cssClass)}>
        <div className="container">
          {trainersElement}
          {what_learn ? (
            <TextBlock
              text={what_learn}
              images={images}
              files={files}
              label="What will you learn"
            />
          ) : null}
          {things_to_bring ? (
            <TextBlock
              text={things_to_bring}
              images={images}
              files={files}
              label="Things to bring"
            />
          ) : null}
          {prerequisites ? (
            <TextBlock
              text={prerequisites}
              images={images}
              files={files}
              label="Prerequisites"
            />
          ) : null}
        </div>
      </article>
    </React.Fragment>
  );
};

Training.propTypes = {
  data: object.isRequired,
  people: object,
  cssClass: string,
  images: array,
  files: array,
};

export default Training;

export const query = graphql`
  fragment Training on PloneTraining {
    id
    _id
    title
    description
    _path
    things_to_bring {
      react
    }
    prerequisites {
      react
    }
    what_learn {
      react
    }
    docs_link
    room
    audience
    level
    duration
    related_people {
      _id
    }
  }
`;
