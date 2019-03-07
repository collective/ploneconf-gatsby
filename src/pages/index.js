import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import AboutTheEvent from '../components/AboutTheEvent';
import HPNumbers from '../components/HPNumbers';

import PCFraraSVG from '../components/svg/PCFraraSVG';

const IndexPage = ({ data }) => (
  <Layout>
    <PCFraraSVG />
    <AboutTheEvent />
    <HPNumbers />
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
