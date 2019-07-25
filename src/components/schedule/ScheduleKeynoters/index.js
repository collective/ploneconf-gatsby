import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import UserSVG from '../../svg/UserSVG';
import ConferenceSVG from '../../svg/ConferenceSVG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

import './index.scss';

const ScheduleKeynoters = () => {
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

        if (talks.length === 0) {
          return '';
        }
        const filteredTalks = talks;

        //qui bisogna filtrare i  talk che sono di tipo 'keynote'
        /*const filteredTalks = talks.filter(({ node }) => {
          return node.keynote == true;
        });*/

        if (filteredTalks.length === 0) {
          return '';
        }
        //qui deve estrarre i keynoters dai talk filtrati
        const keynoters = [];

        /*  const keynotersId = [];
        filteredTalks.forEach(_node => {
          const talk = _node.node;
          talk.related_people.forEach(personId => {
            people.forEach(pnode => {
              const person = pnode.node;
              if (person.id == personId._id) {
                if (keynotersId.indexOf(person.id) < 0) {
                  keynotersId.push(person.id);
                  keynoters.push({person:person,talk:talk});
                }
              }
            });
          });
        });
        keynoters = people.filter(({node})=>{
          keynotersId.indexOf(node.id )>=0;
        });

        */

        //per adesso li prendo staticamente da people, ma c'è da sistemare la ricerca sopra e poi questo pezzo va tolto!
        keynoters[0] = {
          person: people[0].node,
          talk: filteredTalks[0].node,
        };
        keynoters[1] = {
          person: people[1].node,
          talk: filteredTalks[1].node,
        };
        keynoters[2] = {
          person: people[2].node,
          talk: filteredTalks[2].node,
        };

        return (
          <div className="schedule-keynoters">
            <h3>
              <div className="icon">
                <ConferenceSVG />
              </div>
              Keynoters
            </h3>
            <div className="subtitle">
              Lorem ipsum <span>dolor</span> sit amet.
            </div>
            <div className="people">
              {keynoters.map(({ person, talk }) => (
                <div className="person" key={person.id}>
                  <div className="user-image">
                    <div className="rounded-image">
                      {person.image && person.image.childImageSharp ? (
                        <Img resolutions={person.image.childImageSharp.fixed} />
                      ) : (
                        <UserSVG />
                      )}
                    </div>
                  </div>

                  <div className="name">{person.title}</div>
                  <div className="talk">
                    <h4>{talk.title}</h4>
                  </div>
                  <div className="user-link">
                    {person.twitter && person.twitter.length ? (
                      <a href={`https://twitter.com/${person.twitter}`}>
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    ) : (
                      ''
                    )}{' '}
                    {person.github && person.github.length ? (
                      <a href={`https://github.com/${person.github}`}>
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      }}
    />
  );
};

ScheduleKeynoters.propTypes = {};

export default ScheduleKeynoters;
