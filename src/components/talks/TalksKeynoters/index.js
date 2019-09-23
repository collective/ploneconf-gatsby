import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Link } from 'gatsby';
import ConferenceSVG from '../../svg/ConferenceSVG';
import PersonImage from '../../people/PersonImage';
import { ellipsis } from 'ellipsed';

import './index.scss';

class TalksKeynoters extends Component {
  componentDidMount() {
    ellipsis('.talk-description', 3);
  }
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allPloneTalk(
              filter: { is_keynote: { eq: true } }
              sort: { fields: modified }
            ) {
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

          //qui deve estrarre i keynoters dai talk filtrati
          const keynoters = [];

          const keynotersId = [];
          talks.forEach(_node => {
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
            <div className="talks-keynoters">
              <h3>
                <div className="icon">
                  <ConferenceSVG />
                </div>
                Keynoters
              </h3>
              {/* <div className="subtitle" /> */}
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

TalksKeynoters.propTypes = {};

export default TalksKeynoters;
