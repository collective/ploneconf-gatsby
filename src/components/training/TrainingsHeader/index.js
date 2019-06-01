import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PageHeader from '../../PageHeader';
import { string } from 'prop-types';

const TrainingsHeader = ({ title, description }) => (
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
      const { ploneImage } = data;
      return (
        <PageHeader
          img={ploneImage ? ploneImage.image.childImageSharp : null}
          text={
            title ? (
              <React.Fragment>
                <h1>{title}</h1>
                {description && <p>{description}</p>}
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
  title: string,
  description: string,
};

export default TrainingsHeader;
