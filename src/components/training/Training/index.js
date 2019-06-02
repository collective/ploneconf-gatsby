import React from 'react';
import { array, object, string } from 'prop-types';
import { graphql } from 'gatsby';
import cx from 'classnames';
import { Link } from 'gatsby';
import TextBlock from '../helpers/TextBlock';
import { whenLabel } from '../../../helpers';

import './index.scss';

const TrainerBlock = ({ trainers }) => {
  if (trainers.length === 0) {
    return '';
  }
  return (
    <div className="trainers">
      <h4>Instructor</h4>
      {trainers.map(({ node }, index, arr) => {
        if (arr.length - 1 === index) {
          return (
            <Link key={node.UID} to={node._path}>
              {node.title}
            </Link>
          );
        } else {
          return (
            <React.Fragment key={node.UID}>
              <Link to={node._path}>{node.title}</Link>
              {', '}
            </React.Fragment>
          );
        }
      })}
    </div>
  );
};

const DefaultBlock = props => {
  const { strValue, cssClass, label } = props;
  if (strValue.length === 0) {
    return '';
  }

  return (
    <div className={cssClass}>
      <h4>{label}</h4>
      {strValue}
    </div>
  );
};

const Training = ({ data, people, cssClass, images = [], files = [] }) => {
  const {
    what_learn,
    things_to_bring,
    prerequisites,
    room,
    description,
    docs_link,
    audience,
    level,
    duration,
    related_people,
    start,
    end,
  } = data;
  const trainer_ids = related_people.map(person => person._id);
  const trainers = people.edges.filter(({ node }) =>
    trainer_ids.includes(node.id),
  );
  const audienceLabel =
    audience && audience.length > 1 ? audience.join(', ') : audience[0];
  return (
    <React.Fragment>
      <article key={data._id} className={cx('document-content', cssClass)}>
        <div className="container">
          {description && description.length ? (
            <h3 className="training-description">{description}</h3>
          ) : (
            ''
          )}
          <div className="training-details">
            <div className="column left-block">
              {what_learn ? (
                <TextBlock
                  cssClass="what-learn"
                  text={what_learn}
                  images={images}
                  files={files}
                  label="What will you learn"
                />
              ) : null}
              {things_to_bring ? (
                <TextBlock
                  cssClass="things-to-bring"
                  text={things_to_bring}
                  images={images}
                  files={files}
                  label="Things to bring"
                />
              ) : null}
              {prerequisites ? (
                <TextBlock
                  cssClass="prerequisites"
                  text={prerequisites}
                  images={images}
                  files={files}
                  label="Prerequisites"
                />
              ) : null}
              {docs_link.length ? (
                <div className="training-documentation">
                  <h4>Documentation</h4>
                  <a href={docs_link} title="Training documentation">
                    {docs_link}
                  </a>
                </div>
              ) : (
                ''
              )}
            </div>
            <div className="column right-block">
              <TrainerBlock trainers={trainers} />
              <DefaultBlock
                strValue={duration}
                label="Length"
                cssClass="length"
              />
              <DefaultBlock
                strValue={whenLabel({ start, end })}
                label="When"
                cssClass="when"
              />
              <DefaultBlock
                strValue={audienceLabel}
                label="Target audience"
                cssClass="target-audience"
              />
              <DefaultBlock
                strValue={level}
                label="Target level"
                cssClass="target-level"
              />
              <DefaultBlock strValue={room} label="Room" cssClass="room" />
            </div>
          </div>
          <div className="training-footer">
            INTERESTED IN THIS TRAINING? - TODO
          </div>
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
  breadcrumbs: object,
};

export default Training;

export const query = graphql`
  fragment Training on PloneTraining {
    id
    _id
    _type
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
      title
    }
    start
    end
  }
`;
