import React from 'react';
import { array } from 'prop-types';
import Document from '../../Document';
import { StaticQuery, graphql } from 'gatsby';
import TrainersList from '../helpers/TrainersList';

const TrainingHome = ({ images = [], files = [] }) => (
  <StaticQuery
    query={graphql`
      query {
        ploneDocument(_id: { eq: "training" }) {
          ...Document
        }
        allPloneTraining {
          edges {
            node {
              id
              _path
              title
              description
              duration
              room
              audience
              level
              related_people {
                _id
                title
              }
            }
          }
        }
      }
    `}
    render={({ ploneDocument, allPloneTraining }) => (
      <React.Fragment>
        <Document
          cssClass="training"
          {...{
            data: ploneDocument,
            images,
            files,
          }}
        />
        <TrainersList data={allPloneTraining.edges} />
      </React.Fragment>
    )}
  />
);

TrainingHome.propTypes = {
  images: array,
  files: array,
};

export default TrainingHome;
