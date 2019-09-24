import React from 'react';
import { graphql, Link } from 'gatsby';
import { string, shape, arrayOf, array, object } from 'prop-types';
import cx from 'classnames';
import DefaultBlock from '../common/DefaultBlock';
import LabelRow from '../LabelRow';
import DetailsDate from '../common/DetailsDate';
import RichText from '../RichText';
import BirdSVG from '../svg/BirdSVG';
import CTATickets from '../CTATickets';
import PersonImage from '../people/PersonImage';
import './index.scss';

const Talk = ({ data, people = [], images = [], files = [] }) => {
  const {
    _id,
    title,
    audience,
    duration,
    level,
    text,
    description,
    room,
    start,
    end,
    related_people = [],
    is_keynote,
  } = data;

  let labels = [
    {
      text: 'Talk',
      color: 'purple',
    },
  ];
  if (is_keynote) {
    labels.push({
      text: 'Keynote',
    });
  }
  const relators = people.edges
    .filter(({ node }) => {
      return related_people.filter(({ _id }) => _id === node.id).length > 0;
    })
    .map(({ node }) => node);
  let duration_minutes;
  if (duration) {
    // eslint-disable-next-line quotes
    duration_minutes = duration == 'Long talk' ? "40'" : "20'";
  }

  let abstract = '';
  if (text) {
    abstract = (
      <RichText serialized={text.react} images={images} files={files} />
    );
  } else if (description && description.length) {
    abstract = <p>{description}</p>;
  }

  return (
    <React.Fragment>
      <article key={_id} className="document-content">
        <div className="container">
          <LabelRow labels={labels} />
          <h3>{title}</h3>

          <div className="talk-details">
            <div
              className={cx([
                'column',
                'left-block',
                {
                  multiple: relators.length > 1,
                },
              ])}
            >
              {relators.map(relator => (
                <div className="relator" key={relator.id}>
                  <PersonImage person={relator} viewDefaultImage={false} />
                  <div className="name">
                    <div className="data">
                      <strong>Speaker</strong>
                      <br />
                      <Link to={relator._path}>{relator.title}</Link>
                    </div>
                  </div>
                </div>
              ))}
              {abstract}
            </div>
            <div className="column right-block">
              <DetailsDate start={start} end={end} />
              <DefaultBlock
                strValue={duration_minutes}
                label="Length"
                cssClass="length blocco"
              />
              <DefaultBlock
                strValue={audience.join(', ')}
                label="Target Audience"
                cssClass="audience blocco"
              />
              <DefaultBlock
                strValue={level}
                label="Target Level"
                cssClass="level blocco"
              />
              <DefaultBlock
                strValue={room}
                label="Room"
                cssClass="room blocco"
              />
            </div>
          </div>
          <div className="bird-sep">
            <BirdSVG />
          </div>
        </div>
      </article>
      <CTATickets />
    </React.Fragment>
  );
};

Talk.propTypes = {
  data: shape({
    id: string.isRequired,
    title: string,
    description: string,
    audience: arrayOf(string),
    duration: string,
    _path: string.isRequired,
  }),
  images: array,
  files: array,
  people: object,
  description: string,
  text: object,
};

export default Talk;

export const query = graphql`
  fragment TalkFragment on PloneTalk {
    UID
    id
    _path
    title
    description
    topic
    text {
      react
    }
    audience
    duration
    related_people {
      _id
      title
    }
    is_keynote
    _type
    level
    room
    start
    end
  }
`;
