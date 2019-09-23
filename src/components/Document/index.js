import React from 'react';
import { array, object, string } from 'prop-types';
import { graphql } from 'gatsby';
import cx from 'classnames';

import RichText from '../RichText';
import HPSponsorsPartners from '../HPSponsorsPartners';

import './index.scss';

const Document = ({ data, cssClass, images = [], files = [], children }) => {
  return (
    <React.Fragment key={data._id} id={data._id}>
      {data._id == 'sponsors' && (
        <div className="container">
          <HPSponsorsPartners />
        </div>
      )}
      <article className={cx('document-content', cssClass)}>
        <div className="container">
          {data.text ? (
            <RichText
              serialized={data.text.react}
              images={images}
              files={files}
            />
          ) : null}
        </div>

        <div className="container">{children}</div>
        {(data._id == 'sponsors' || data._id == 'call-for-speakers') && (
          <div className="savonarola-bg" />
        )}
      </article>
    </React.Fragment>
  );
};
Document.propTypes = {
  data: object.isRequired,
  cssClass: string,
  images: array,
  files: array,
  children: object,
};

export default Document;

export const query = graphql`
  fragment Document on PloneDocument {
    id
    _id
    _type
    title
    description
    text {
      react
    }
    hero_text {
      react
    }
    image {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    _path
  }
`;
