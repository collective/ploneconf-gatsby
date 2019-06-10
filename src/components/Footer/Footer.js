import React from 'react';
import { Link } from 'gatsby';

import LogoSVG from '../svg/LogoSVG';
import PloneSVG from '../svg/PloneSVG';
import RedTurtleSVG from '../svg/RedTurtleSVG';
import './index.scss';

const Footer = () => (
  <div id="footer-wrapper">
    <div className="footer-content">
      <div className="container">
        <div className="footer-flex-helper footer-content-wrapper">
          <div className="flex-item flex-item-grow">
            <div className="footer-flex-helper logo-about-wrapper">
              <LogoSVG />
            </div>
          </div>
          <div className="flex-item rt-info">
            <h2>The Organizer</h2>
            <a className="rt-logo" href="https://www.redturtle.it/">
              <span className="sr-only">Go to RedTurtle website</span>
              <RedTurtleSVG />
            </a>
            <p>via Nino Bixio, 4 - 44122 Ferrara (ITALY)</p>
            <div className="contact-wrapper">
              <span className="label">Tel.</span>
              <span>(+39) 0532 1915958</span>
            </div>
            <div className="contact-wrapper">
              <span className="label">Email</span>
              <a href="mailto:conf@plone.org">conf@plone.org</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-plone-actions">
      <div className="container">
        <div className="footer-flex-helper">
          <div className="flex-item">
            <div className="footer-flex-helper about-plone-wrapper">
              <PloneSVG />
              <div className="about-plone">
                <span>
                  The Plone Open Source CMS/WCM is 2000-2019 by the Plone
                  Foundation and friends. Distrubuted under the GNU GPL licence.
                </span>
              </div>
            </div>
          </div>
          <div className="flex-item">
            <ul>
              <li>
                <Link to="/code-of-conduct">code of conduct</Link>
              </li>
              <li>
                <Link to="/privacy-policy">privacy policy</Link>
              </li>
              {/* <li>
                <Link to="/cookie-policy">cookie</Link>
              </li> */}
              <li>
                <Link to="/credits">credits</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
