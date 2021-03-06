import React from 'react';
import { array, object, string } from 'prop-types';
import { graphql } from 'gatsby';
import cx from 'classnames';
import { Link } from 'gatsby';
import TextBlock from '../helpers/TextBlock';
import { whenLabel } from '../../../helpers';
import DefaultBlock from '../../common/DefaultBlock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LabelRow from '../../LabelRow';
import GetTicketCastle from '../../GetTicketCastle';
import {
  faTerminal,
  faGraduationCap,
  faLaptop,
  faBook,
} from '@fortawesome/free-solid-svg-icons';

import './index.scss';

const TrainerBlock = ({ trainers }) => {
  if (trainers.length === 0) {
    return '';
  }
  return (
    <div className="trainers blocco">
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
  let labels = [
    {
      text: 'Training',
      color: 'light-blue',
    },
  ];
  return (
    <React.Fragment>
      <article key={data._id} className={cx('document-content', cssClass)}>
        <div className="container">
          <LabelRow labels={labels} />
          {description && description.length ? (
            <h3 className="training-description">{description}</h3>
          ) : (
            ''
          )}
          <div className="training-details">
            <div className="column left-block">
              {what_learn ? (
                <div className="blocco">
                  <FontAwesomeIcon icon={faGraduationCap} />
                  <TextBlock
                    cssClass="what-learn"
                    text={what_learn}
                    images={images}
                    files={files}
                    label="What you will learn"
                  />
                </div>
              ) : null}
              {things_to_bring ? (
                <div className="blocco">
                  <FontAwesomeIcon icon={faTerminal} />
                  <TextBlock
                    cssClass="things-to-bring"
                    text={things_to_bring}
                    images={images}
                    files={files}
                    label="Things to bring"
                    icon={faTerminal}
                  />
                </div>
              ) : null}
              {prerequisites ? (
                <div className="blocco">
                  <FontAwesomeIcon icon={faLaptop} />
                  <TextBlock
                    cssClass="prerequisites"
                    text={prerequisites}
                    images={images}
                    files={files}
                    label="Prerequisites"
                  />
                </div>
              ) : null}
              {docs_link && docs_link.length ? (
                <div className="blocco">
                  <FontAwesomeIcon icon={faBook} />
                  <div className="blocco training-documentation">
                    <h4>Documentation</h4>
                    <a
                      href={docs_link}
                      title="Training documentation"
                      className="dont-break-out"
                    >
                      {docs_link}
                    </a>
                  </div>
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
                cssClass="length blocco"
              />
              <DefaultBlock
                strValue={whenLabel({ start, end })}
                label="When"
                cssClass="when blocco"
              />
              <DefaultBlock
                strValue={audienceLabel}
                label="Target audience"
                cssClass="target-audience blocco"
              />
              <DefaultBlock
                strValue={level}
                label="Target level"
                cssClass="target-level blocco"
              />
              <DefaultBlock
                strValue={room}
                label="Room"
                cssClass="room blocco"
              />
            </div>
          </div>
          <div className="training-footer">
            <GetTicketCastle
              text={'Interested in this <strong>training</strong>?'}
            />
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
