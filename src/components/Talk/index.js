import React from 'react';
import { graphql, Link } from 'gatsby';
import { string, shape, arrayOf, array, object } from 'prop-types';
import DefaultBlock from '../common/DefaultBlock';
import LabelRow from '../LabelRow';
// import DetailsDate from '../common/DetailsDate';
import RichText from '../RichText';
import BirdSVG from '../svg/BirdSVG';
import CTATickets from '../CTATickets';
import PersonImage from '../people/PersonImage';
import './index.scss';

const Talk = ({ data, people, images = [], files = [] }) => {
  const {
    _id,
    title,
    audience,
    duration,
    level,
    // room,
    // start,
    // end,
    related_people,
  } = data;

  let labels = [
    {
      text: 'Talk',
      color: 'purple',
    },
  ];
  let relator;
  if (related_people && related_people.length > 0) {
    people.edges.forEach(node => {
      let p = node.node;
      if (p.id == related_people[0]._id) {
        relator = p;
      }
    });
  }
  let duration_minutes;
  if (duration) {
    duration_minutes = duration == 'Long talk' ? "40'" : "20'";
  }
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
                  <div className="name">
                    <div className="data">
                      <strong>Speaker</strong>
                      <br />
                      <Link to={relator._path}>{relator.title}</Link>
                    </div>
                  </div>
                </div>
              ) : null}
              {data.text ? (
                <RichText
                  serialized={data.text.react}
                  images={images}
                  files={files}
                />
              ) : null}
            </div>
            <div className="column right-block">
              {/*<DetailsDate start={start} end={end} />*/}
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
              {/*<DefaultBlock
                strValue={room}
                label="Room"
                cssClass="room blocco"
              />*/}
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
};

export default Talk;

export const query = graphql`
  fragment TalkFragment on PloneTalk {
    UID
    id
    _path
    title
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
    #room
    #start
    #end
  }
`;
