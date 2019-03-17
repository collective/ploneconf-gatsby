import React from 'react';
import Img from 'gatsby-image';
import { shape, object } from 'prop-types';

import './index.scss';

const PageHeader = ({ img }) => (
  <header className="page-header">
    <div className="bg-image">
      <Img fluid={img.fluid} role="presentation" />
    </div>
    <h1>
      Become a <span>sponsor!</span>
    </h1>
    <p className="subtitle">
      Be part of the <strong>Plone Conference 2019</strong>
    </p>
    <p className="payoff">
      We are already there, and you?
      <br />
      We have prepared everything for the best, but we want to surprise you even
      more! Become a sponsor, &quot;What we do in life echoes in eternity&quot;
      in the Plone world. Do not lose the opportunity...
    </p>
    <div className="submit-button">
      <button onClick={() => {}}>Submit your request for sponsorship</button>
    </div>
  </header>
);

PageHeader.propTypes = {
  img: shape({
    fluid: object,
  }),
};

export default PageHeader;
