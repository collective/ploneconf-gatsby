import React from 'react';
import { array } from 'prop-types';
import Document from '../../Document';
import { StaticQuery, graphql } from 'gatsby';
import TrainingsList from '../helpers/TrainingsList';

import './index.scss';

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
              UID
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
        allPlonePerson {
          edges {
            node {
              id
              _path
              title
            }
          }
        }
      }
    `}
    render={({ ploneDocument, allPloneTraining, allPlonePerson }) => (
      <React.Fragment>
        <Document
          cssClass="training"
          {...{
            data: ploneDocument,
            images,
            files,
          }}
        />

        <div className="container">
          <TrainingsList
            data={allPloneTraining.edges}
            people={allPlonePerson.edges}
          />
        </div>
      </React.Fragment>
    )}
  />
);

TrainingHome.propTypes = {
  images: array,
  files: array,
};

export default TrainingHome;
