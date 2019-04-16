import React from 'react';
import { graphql } from 'gatsby';
import { string, shape } from 'prop-types';
import Img from 'gatsby-image';

const Person = ({ data }) => {
  const { _id, title, bio, github, twitter, image } = data;
  return (
    <article key={_id}>
      <h1>{title}</h1>
      {image && image.childImageSharp ? (
        <Img resolutions={image.childImageSharp.fixed} />
      ) : null}
      {bio ? (
        <p>
          <strong>{bio}</strong>
        </p>
      ) : null}
      {twitter ? (
        <div>
          Twitter: <a href="https://twitter.com/{twitter}">@{twitter}</a>
        </div>
      ) : null}
      {github ? (
        <div>
          Github: <a href="https://github.com/{github}">{github}</a>
        </div>
      ) : null}
    </article>
  );
};

Person.propTypes = {
  data: shape({
    id: string.isRequired,
    title: string,
    bio: string,
    twitter: string,
    github: string,
    _path: string.isRequired,
  }),
};

export default Person;

export const query = graphql`
  fragment Person on PlonePerson {
    id
    title
    bio
    github
    twitter
    _path
    image {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
