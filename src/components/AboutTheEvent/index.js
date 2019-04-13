import React from 'react';
import { Link } from 'gatsby';
import CastelloLogoSVG from '../../components/svg/CastelloLogoSVG';

import './index.scss';

const AboutTheEvent = () => (
  <div id="about-the-event">
    <div className="blue-shape">
      <div className="dark-shape">
        <div className="text-wrapper">
          <div className="container flex-helper">
            <div className="text-about">
              <span className="section-label">About the event</span>
              <h2>
                <span className="text">
                  Digital <span className="title-blue">Experience</span>{' '}
                  Conference
                </span>
              </h2>
              <p>
                Be a part of the discussion surrounding the latest trends and
                success stories of Digital Experience Innovation about Plone,
                Python, Pyramid, Guillotina, Volto and the most celebrated
                frontend frameworks.
              </p>
            </div>
            <div className="text-info-wrapper">
              <div className="svg-wrapper">
                <CastelloLogoSVG />
              </div>
              <div className="text-info">
                <p className="italy-label">Italy</p>
                <p className="ferrara">Ferrara</p>
                <p className="dates">
                  <span className="month">October</span>
                  <span className="days">21-27</span>
                </p>
                {/* <Link to="/tickets" className="get-tickets">
                  Get tickets!
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutTheEvent;
