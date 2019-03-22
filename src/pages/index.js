import React from 'react';
import { graphql } from 'gatsby';
import { shape } from 'prop-types';

import Layout from '../components/Layout';

import PCFraraSVG from '../components/svg/PCFraraSVG';
import AboutTheEvent from '../components/AboutTheEvent';
import HPNumbers from '../components/HPNumbers';
import CTASponsor from '../components/CTASponsor';
import HPVenue from '../components/HPVenue';

const IndexPage = ({ data }) => (
  <Layout isHome>
    <PCFraraSVG />
    <AboutTheEvent />
    <HPNumbers />
    <CTASponsor />
    <HPVenue img={data.venue.childImageSharp} />
  </Layout>
);

IndexPage.propTypes = {
  data: shape({
    venue: shape({
      childImageSharp: HPVenue.propTypes.img,
    }),
  }),
};

export default IndexPage;

// venue: imageSharp(id: { regex: "/venue_castle.png/" }) {
//   sizes(maxWidth: 1920) {
//     ...GatsbyImageSharpSizes
//   }
// }

export const query = graphql`
  query IndexPageQuery {
    ploneSite(_path: { eq: "/" }) {
      ...Site
    }
    venue: file(relativePath: { eq: "venue_castle.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
