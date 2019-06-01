import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Training from '../components/training/Training';

const TrainingLayout = ({ data }) => {
  console.log(data.ploneTraining);
  return (
    <Layout>
      <Training
        data={data.ploneTraining}
        breadcrumbs={data.ploneBreadcrumbs}
        people={data.allPlonePerson}
      />
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
    ploneBreadcrumbs(_path: { eq: $path }) {
      items {
        _id
        _path
        title
      }
    }
  }
`;
