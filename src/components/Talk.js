import React from 'react';
import { graphql } from 'gatsby';
import { string, shape, arrayOf } from 'prop-types';
import { Link } from 'gatsby';

const Talk = ({ data, relator }) => {
  const { _id, title, description, audience, duration, level } = data;

  return (
    <article key={_id}>
      <h1>{title}</h1>
      {description ? (
        <p>
          <strong>{description}</strong>
        </p>
      ) : null}
      {audience ? <div>Audience: {audience.join(', ')}</div> : null}
      {duration ? <div>Duration: {duration}</div> : null}
      {level ? <div>Level: {level}</div> : null}
      {relator ? <Link to={relator._path}>{relator.title}</Link> : null}
    </article>
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
};

export default Talk;

export const query = graphql`
  fragment Talk on PloneTalk {
    id
    title
    description
    audience
    duration
    _path
  }
`;
