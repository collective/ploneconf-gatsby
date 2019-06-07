import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import HeaderWrapper from './HeaderWrapper';
import { object } from 'prop-types';

const TrainingsHeader = ({ context }) => (
  <StaticQuery
    query={graphql`
      query {
        ploneImage(_id: { eq: "training-image.jpeg" }) {
          id
          image {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    `}
    render={data => {
      const { ploneImage, people } = data;
      const { title, related_people } = context;
      const trainerNames = related_people
        .map(person => person.title)
        .join(', ');
      return (
        <HeaderWrapper
          img={ploneImage ? ploneImage.image.childImageSharp : null}
          text={
            title ? (
              <React.Fragment>
                <h1>{title}</h1>
                {trainerNames && <p>{trainerNames}</p>}
              </React.Fragment>
            ) : (
              ''
            )
          }
        />
      );
    }}
  />
);

TrainingsHeader.propTypes = {
  context: object,
};

export default TrainingsHeader;
