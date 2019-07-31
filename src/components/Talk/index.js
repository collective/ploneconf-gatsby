import React from 'react';
import { graphql, Link } from 'gatsby';
import { string, shape, arrayOf, array, object } from 'prop-types';
import DefaultBlock from '../common/DefaultBlock';
import LabelRow from '../LabelRow';
import DetailsDate from '../common/DetailsDate';
import BirdSVG from '../svg/BirdSVG';
import CTATickets from '../CTATickets';
import PersonImage from '../people/PersonImage';
import './index.scss';

const Talk = ({ data, relator }) => {
  const {
    _id,
    title,
    description,
    audience,
    duration,
    level,
    room,
    start,
    end,
    related_people,
  } = data;
  // console.log(related_people);

  let labels = [
    {
      text: 'Talk',
      color: 'purple',
    },
  ];
  return (
    <React.Fragment>
      <article key={_id} className="document-content">
        <div className="container">
          <LabelRow labels={labels} />
          <h3>{title}</h3>

          <div className="talk-details">
            <div className="column left-block">
              {relator ? (
                <div className="relator">
                  <PersonImage person={relator} viewDefaultImage={false} />
                  <Link to={relator._path}>{relator.title}</Link>
                </div>
              ) : null}
              {description && description.length ? <p>{description}</p> : ''}
            </div>
            <div className="column right-block">
              <DetailsDate start={start} end={end} />
              <DefaultBlock
                strValue={duration}
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
                label="Level"
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
  relator: shape({
    id: string.isRequired,
    title: string,
    image: shape({
      id: string,
    }),
    _path: string.isRequired,
  }),
  images: array,
  people: object,
};

export default Talk;

export const query = graphql`
  fragment TalkFragment on PloneTalk {
    UID
    id
    _path
    title
    description
    audience
    duration
    related_people {
      _id
      title
    }
    is_keynote
    _type
    #room
    #start
    #end
  }
`;
