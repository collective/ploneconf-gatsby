import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import HeaderWrapper from './HeaderWrapper';

const PeopleHeader = () => (
  <StaticQuery
    query={graphql`
      query {
        ploneImage(_id: { eq: "speakers-image.jpeg" }) {
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
      const text = (
        <React.Fragment>
          <h1>Speakers</h1>
          <p>The Plone Conference 2019 amazing team</p>
        </React.Fragment>
      );
      return (
        <HeaderWrapper
          img={ploneImage ? ploneImage.image.childImageSharp : null}
          text={text}
        />
      );
    }}
  />
);

PeopleHeader.propTypes = {};

export default PeopleHeader;
