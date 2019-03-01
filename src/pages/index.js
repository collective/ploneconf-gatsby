import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import AboutTheEvent from '../components/AboutTheEvent';
import PCFraraSVG from '../components/svg/PCFraraSVG';

const IndexPage = ({ data }) => (
  <Layout>
    <PCFraraSVG />
    <AboutTheEvent />
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query IndexPageQuery {
    ploneSite(_path: { eq: "/" }) {
      ...Site
    }
  }
`;
