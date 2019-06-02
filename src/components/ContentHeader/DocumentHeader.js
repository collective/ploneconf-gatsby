import React from 'react';
import HeaderWrapper from './HeaderWrapper';
import RichText from '../RichText';

const DocumentHeader = ({ context, images, files }) => {
  if (context.image && context.image.childImageSharp) {
    return (
      <HeaderWrapper
        img={context.image.childImageSharp}
        text={
          context.hero_text ? (
            <RichText
              serialized={context.hero_text.react}
              images={images}
              files={files}
            />
          ) : context.title ? (
            <React.Fragment>
              <h1>{context.title}</h1>
              {context.description && <p>{context.description}</p>}
            </React.Fragment>
          ) : (
            ''
          )
        }
      />
    );
  }
};
DocumentHeader.propTypes = {};

export default DocumentHeader;
