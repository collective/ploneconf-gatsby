import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Link } from 'gatsby';
import ConferenceSVG from '../../svg/ConferenceSVG';
import PersonImage from '../../people/PersonImage';
import { ellipsis } from 'ellipsed';

import './index.scss';

class ScheduleKeynoters extends Component {
  componentDidMount() {
    ellipsis('.talk-description', 3);
  }
  render() {
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

          //filtro i  talk che sono di tipo 'keynote'
          const filteredTalks = talks.filter(({ node }) => {
            return node.is_keynote == true;
          });

          if (filteredTalks.length === 0) {
            return '';
          }

          //qui deve estrarre i keynoters dai talk filtrati
          const keynoters = [];

          const keynotersId = [];
          filteredTalks.forEach(_node => {
            const talk = _node.node;
            talk.related_people.forEach(personId => {
              people.forEach(pnode => {
                const person = pnode.node;
                if (person.id == personId._id) {
                  if (keynotersId.indexOf(person.id) < 0) {
                    keynotersId.push(person.id);
                    keynoters.push({ person: person, talk: talk });
                  }
                }
              });
            });
          });

          return (
            <div className="schedule-keynoters">
              <h3>
                <div className="icon">
                  <ConferenceSVG />
                </div>
                Keynoters
              </h3>
              {/*<div className="subtitle"> Lorem ipsum <span>dolor</span> sit amet. </div>*/}
              <div className="people">
                {keynoters.map(({ person, talk }) => (
                  <div className="person" key={person.id}>
                    <PersonImage person={person} viewDefaultImage={true} />
                    <div className="name">
                      <Link to={person._path} title="details">
                        {person.title}
                      </Link>
                    </div>
                    <div className="talk">
                      <h4>
                        <Link to={talk._path}>{talk.title}</Link>
                      </h4>
                    </div>
                    {/*<div className="user-link">
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
                    </div>*/}
                    <div className="talk-description">{talk.description}</div>
                  </div>
                ))}
              </div>
            </div>
          );
        }}
      />
    );
  }
}

ScheduleKeynoters.propTypes = {};

export default ScheduleKeynoters;
