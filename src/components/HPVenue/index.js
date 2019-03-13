import React from 'react';
import Img from 'gatsby-image';
import { shape, object } from 'prop-types';

import VenueBgSVG from '../svg/VenueBgSVG';
import HPVenueInfo from '../HPVenueInfo';

import './index.scss';

const HPVenue = ({ img }) => (
  <React.Fragment>
    <div className="hp-venue">
      <div className="hp-image-wrapper">
        <VenueBgSVG />
        <Img fluid={img.fluid} alt="Conf venue in Ferrara" />
      </div>
      <div className="text-wrapper">
        <div className="ferrara">
          <p className="label">Location</p>
          <h3>Ferrara</h3>
          <p className="italy">Italy</p>
        </div>
      </div>
      <HPVenueInfo />
    </div>
  </React.Fragment>
);

HPVenue.propTypes = {
  img: shape({
    fluid: object,
  }),
};

export default HPVenue;
