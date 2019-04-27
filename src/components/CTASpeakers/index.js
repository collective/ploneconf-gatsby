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
          Donec id elit non mi porta gravida at eget metus. Curabitur blandit
          tempus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris
          condimentum nibh, ut
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
