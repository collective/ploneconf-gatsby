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
                Join the <b>17th</b> edition of <b>Plone Conference</b> in the
                amazing Ferrara and gain an unparalleled opportunity to discover
                insights from the <b>inspiring keynote speakers</b> and exchange
                experiences with <b>designers</b> and <b>developers</b> from{' '}
                <b>all over the world</b>.
                <br />
                We are building for you a great gathering of the global Plone
                Community with a lot of <b>networking</b> and growth
                opportunities. Be a part of the discussion surrounding the{' '}
                <b>latest trends</b> and <b>success stories</b> of Digital
                Experience Innovation about Plone, Volto, Guillotina, Pyramid,
                Python and the most celebrated frontend frameworks.
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
