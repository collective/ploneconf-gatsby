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
        <p className="label">All the amazing talks</p>
        <h2>
          Curious about the <b>talks?</b>
        </h2>
        <p>
          We are an open community and people sent us the{' '}
          <b>inspiring stories</b> we wanted. We&apos;ll have speaches about
          Plone, of course, but also about Guillotina, Pyramid, Volto, about
          frontend development, new trends and hypes are also in.
        </p>
        <p>Don&apos;t miss the three terrific keynotes.</p>
        <Link to="/call-for-speakers" className="btn btn-primary btn-lg">
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
