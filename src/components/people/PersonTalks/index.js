import React from 'react';
import { string } from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTv } from '@fortawesome/free-solid-svg-icons';
// import PersonDetailsDate from '../PersonDetailsDate';

const TalkDetails = ({
  // end,
  // start,
  title,
  _path,
}) => (
  <div className="talk-detail">
    {/* <PersonDetailsDate start={start} end={end} /> */}
    <h4>TALK</h4>
    <div className="talk-slot">
      <FontAwesomeIcon icon={faTv} />{' '}
      <Link to={_path} title="talk details">
        {title}
      </Link>
    </div>
  </div>
);

const PersonTalks = ({ id }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allPloneTalk {
            edges {
              node {
                UID
                id
                _path
                title
                duration
                related_people {
                  _id
                }
              }
            }
          }
        }
      `}
      render={({ allPloneTalk }) => {
        const talks =
          allPloneTalk.edges && allPloneTalk.edges.length
            ? allPloneTalk.edges
            : [];
        if (talks.length === 0) {
          return '';
        }
        const filteredTalks = talks.filter(({ node }) => {
          const trainers = node.related_people.filter(
            trainer => trainer._id === id,
          );
          return trainers.length !== 0;
        });
        if (filteredTalks.length === 0) {
          return '';
        }
        return (
          <div className="person-talks">
            {filteredTalks.map(({ node }) => (
              <TalkDetails key={node.UID} {...node} />
            ))}
          </div>
        );
      }}
    />
  );
};

PersonTalks.propTypes = {
  id: string.isRequired,
};

export default PersonTalks;
