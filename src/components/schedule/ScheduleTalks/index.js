import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import './index.scss';

const ScheduleTalks = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allPloneTalk {
            edges {
              node {
                ...TalkFragment
              }
            }
          }
          allPlonePerson {
            edges {
              node {
                ...Person
              }
            }
          }
        }
      `}
      render={({ allPloneTalk, allPlonePerson }) => {
        const talks =
          allPloneTalk.edges && allPloneTalk.edges.length
            ? allPloneTalk.edges
            : [];
        const people =
          allPlonePerson.edges && allPlonePerson.edges.length
            ? allPlonePerson.edges
            : [];
        console.log(talks);
        const getSpeaker = function(id) {
          var ret = null;
          console.log('get speaker ' + id);
          people.forEach(person => {
            if (person.id == id) {
              ret = person;
            }
          });
          return ret;
        };

        if (talks.length === 0) {
          return '';
        }

        talks.forEach(node => {
          let talk = node.node;
          let speaker = null;
          if (talk.related_people) {
            speaker = getSpeaker(talk.related_people[0]._id);
          }
          talk.speaker = speaker;
        });

        return (
          <div className="schedule-talks">
            <h3>Talks</h3>
            <div className="subtitle">
              Lorem ipsum <span>dolor</span> sit amet.
            </div>
            <div className="talks">
              {talks.map(talk => (
                <div className="talk" key={talk.node.id}>
                  <div className="talk-data">
                    <h4>{talk.node.title}</h4>
                    <div className="speakers" />
                  </div>
                  {talk.node.speaker ? (
                    <div className="speaker">
                      <div className="user-image">
                        <div className="rounded-image">
                          {talk.node.speaker.image &&
                          talk.node.speaker.image.childImageSharp ? (
                            <Img
                              resolutions={
                                talk.node.speaker.image.childImageSharp.fixed
                              }
                            />
                          ) : (
                            <UserSVG />
                          )}
                        </div>
                      </div>
                      <div className="name">{talk.node.speaker.title}</div>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        );
      }}
    />
  );
};

ScheduleTalks.propTypes = {};

export default ScheduleTalks;
