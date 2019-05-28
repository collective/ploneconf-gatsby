import React from 'react';
import Img from 'gatsby-image';
import { shape, object } from 'prop-types';
import { Link } from 'gatsby';

import CTASpeakersBgSVG from '../svg/CTASpeakersBgSVG';

import './index.scss';

const CTASpeakers = ({ img }) => (
  <div className="cta-speakers">
    <div className="container flex-helper">
      <div className="image-block">
        <figure>
          <Img fluid={img.fluid} alt="Plone Conference" />
        </figure>
      </div>
      <div className="text-block">
        <p className="label">Call for speakers</p>
        <h2>
          Interested in <b>speaking?</b>
        </h2>
        <p>
          We are an open community and we love <b>inspiring stories</b>. Plone
          of course, but also about other python frameworks, frontend
          development, new trends and hypes, everything you are passionate
          about.
        </p>
        <Link to="/call-for-speakers" className="cta-speakers-link">
          Send us your speech proposal!
        </Link>
      </div>
    </div>
    <div className="svg-bg-wrapper">
      <CTASpeakersBgSVG />
    </div>
  </div>
);

CTASpeakers.propTypes = {
  img: shape({
    fluid: object,
  }),
};

export default CTASpeakers;
