import React from 'react';
import Img from 'gatsby-image';
import { shape, object, string, element, oneOfType, any } from 'prop-types';

import './index.scss';

const PageHeader = ({ img, text }) => (
  <header className="page-header">
    <div className="header-content">
      {img && (
        <div className="bg-image">
          <Img fluid={img.fluid} role="presentation" />
        </div>
      )}
      {/* <h1>
        Become a <span>sponsor!</span>
      </h1>
      <p className="subtitle">
        Be part of the <strong>Plone Conference 2019</strong>
      </p>
      <p className="payoff">
        {description}
      </p>
      <div className="submit-button">
        <button onClick={() => {}}>Submit your request for sponsorship</button>
      </div> */}
      {text}
    </div>
  </header>
);

PageHeader.propTypes = {
  img: shape({
    fluid: object,
  }),
  text: any,
  // text: oneOfType(string, element),
};

export default PageHeader;
