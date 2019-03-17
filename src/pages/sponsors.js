import React from 'react';
import { graphql } from 'gatsby';
import { shape } from 'prop-types';

import Layout from '../components/Layout';

import PageHeader from '../components/PageHeader';

const SponsorsPage = ({ data }) => (
  <Layout>
    <PageHeader img={data.header.childImageSharp} />
  </Layout>
);

SponsorsPage.propTypes = {
  data: shape({
    header: shape({
      childImageSharp: PageHeader.propTypes.img,
    }),
  }),
};

export default SponsorsPage;

export const query = graphql`
  query SponsorsPageQuery {
    ploneSite(_path: { eq: "/" }) {
      ...Site
    }
    header: file(relativePath: { eq: "sponsor-header-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
