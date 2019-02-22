import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Talk from '../components/Talk';

const TalkLayout = ({ data }) => (
  <Layout breadcrumbs={data.ploneBreadcrumbs}>
    <Talk data={data['ploneTalk']} relator={data.plonePerson} />
  </Layout>
);

export default TalkLayout;

export const query = graphql`
  query TalkTemplateQuery($path: String!, $relator: String) {
    ploneTalk(_path: { eq: $path }) {
      ...Talk
    }
    plonePerson(id: { eq: $relator }) {
      ...Person
    }
  }
`;
