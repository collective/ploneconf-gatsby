import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Folder from '../components/Folder';

const IndexPage = ({ data }) => (
  <Layout>
    <hr style={{ background: '#e8eef2' }} />
    <Folder data={data.ploneSite} title="Contents" />
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
