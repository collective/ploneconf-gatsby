import React from 'react';
import { array, object, string } from 'prop-types';

import RichText from '../../RichText';

const TextBlock = ({ label, text, images, files }) => (
  <React.Fragment>
    <h4>{label}</h4>
    <RichText serialized={text.react} images={images} files={files} />
  </React.Fragment>
);

TextBlock.propTypes = {
  label: string,
  text: object,
  images: array,
  files: array,
};

export default TextBlock;
