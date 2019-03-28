import React from 'react';
import { graphql } from 'gatsby';

import RichText from '../RichText';
import PageHeader from '../PageHeader';

import './index.scss';

const Document = ({ data, images = [], files = [] }) => (
  <React.Fragment>
    {data.image && data.image.childImageSharp && (
      <PageHeader
        img={data.image.childImageSharp}
        text={
          data.hero_text ? (
            <RichText
              serialized={data.hero_text.react}
              images={images}
              files={files}
            />
          ) : data.title ? (
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
    <article key={data._id} className="document-content">
      <div className="container">
        {/* <h1>{data.title}</h1> */}
        {data.text ? (
          <RichText
            serialized={data.text.react}
            images={images}
            files={files}
          />
        ) : null}
      </div>
    </article>
  </React.Fragment>
);

export default Document;

export const query = graphql`
  fragment Document on PloneDocument {
    id
    _id
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
