import React from 'react';
import Img from 'gatsby-image';
import { shape, object, any } from 'prop-types';

const HeaderWrapper = ({ img, text }) => (
  <header className="page-header">
    <div className="header-content">
      {img && (
        <div className="bg-image">
          <Img fluid={img.fluid} role="presentation" />
        </div>
      )}
      {text}
    </div>
  </header>
);

HeaderWrapper.propTypes = {
  img: shape({
    fluid: object,
  }),
  text: any,
};

export default HeaderWrapper;
