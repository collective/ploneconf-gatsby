import React from 'react';
import PloneCircleSVG from '../svg/PloneCircleSVG';
import { Link } from 'gatsby';

import './index.scss';

const CTASponsor = () => (
  <div className="cta-sponsor container">
    <div className="black-box" />
    <div className="yellow-box">
      <PloneCircleSVG className="first" />
      <PloneCircleSVG className="second" />
      <h2>Call for sponsors is open!</h2>
      <p className="cta-subtitle">Be part of the Plone Conference 2019</p>
      <p>
        <Link to="/sponsors">Become a sponsor</Link>
      </p>
    </div>
  </div>
);

export default CTASponsor;
