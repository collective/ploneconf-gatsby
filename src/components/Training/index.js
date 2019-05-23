import React from 'react';
import { array, object, string } from 'prop-types';
import { graphql } from 'gatsby';
import cx from 'classnames';

import RichText from '../RichText';
import PageHeader from '../PageHeader';

import './index.scss';

const Training = ({ data, cssClass, images = [], files = [] }) => (
  <React.Fragment>
    {data.image && data.image.childImageSharp && (
      <PageHeader
        img={data.image.childImageSharp}
        text={
          data.title ? (
            <React.Fragment>
              <h1>{data.title}</h1>
              {data.description && <p>{data.description}</p>}
            </React.Fragment>
          ) : (
            ''
          )
        }
      />
    )}
    <article key={data._id} className={cx('training-content', cssClass)}>
      <div className="container">
        prova
        {/* {data.text ? (
          <RichText
            serialized={data.text.react}
            images={images}
            files={files}
          />
        ) : null} */}
      </div>
    </article>
  </React.Fragment>
);

Training.propTypes = {
  data: object.isRequired,
  cssClass: string,
  images: array,
  files: array,
};

export default Training;

export const query = graphql`
  fragment Training on PloneTraining {
    id
    _id
    title
    description
    _path
  }
`;
