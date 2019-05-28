import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Training from '../components/Training';

const TrainingLayout = ({ data }) => {
  console.log(data);
  return (
    <Layout breadcrumbs={data.ploneBreadcrumbs}>
      <Training data={data['ploneTraining']} relator={data.plonePerson} />
    </Layout>
  );
};

export default TrainingLayout;

export const query = graphql`
  query TrainingTemplateQuery($path: String!, $relators: [String]) {
    ploneTraining(_path: { eq: $path }) {
      ...Training
    }
    plonePerson(id: { in: $relators }) {
      ...Person
    }
  }
`;
