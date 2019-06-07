import React from 'react';
import { array, object, string } from 'prop-types';

import RichText from '../../RichText';

const TextBlock = ({ cssClass, label, text, images, files }) => (
  <div className={cssClass && cssClass.length ? cssClass : ''}>
    <h4>{label}</h4>
    <RichText serialized={text.react} images={images} files={files} />
  </div>
);

TextBlock.propTypes = {
  label: string,
  text: object,
  images: array,
  files: array,
  cssClass: string,
};

export default TextBlock;
