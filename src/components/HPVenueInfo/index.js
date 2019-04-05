import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import RotatedArrowSVG from '../svg/RotatedArrowSVG';

import './index.scss';

const HPVenueInfo = () => (
  <div className="venue-info">
    <div className="content-wrapper">
      <div className="light-box" />
      <h3>Venue and info</h3>
      <p>
        The venue is located in the heart of city center of Ferrara, in an
        historical movie theatre.
      </p>
      <div className="apollo-info">
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <div className="apollo-info-text">
          <p className="apollo">Apollo Cinepark</p>
          <p className="address">Piazza Carbone, 35 &mdash; 44121 Ferrara</p>
        </div>
      </div>
      <div className="more-details">
        <RotatedArrowSVG />
        <p>More details soon! :-)</p>
      </div>
    </div>
  </div>
);

export default HPVenueInfo;
