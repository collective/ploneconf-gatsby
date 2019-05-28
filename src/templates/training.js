import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Training from '../components/training/Training';

const TrainingLayout = ({ data }) => {
  return (
    <Layout breadcrumbs={data.ploneBreadcrumbs}>
      <Training data={data['ploneTraining']} people={data.allPlonePerson} />
    </Layout>
  );
};

export default TrainingLayout;

export const query = graphql`
  query TrainingTemplateQuery($path: String!) {
    ploneTraining(_path: { eq: $path }) {
      ...Training
    }
    allPlonePerson {
      edges {
        node {
          id
          UID
          title
          _path
          image {
            childImageSharp {
              fixed(width: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`;
