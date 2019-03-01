import React from 'react';

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
              <div className="about-conf">
                <h2>About the conference</h2>
                <span>The Plone Conference 2019 is hosted by...</span>
                <p>Maecenas faucibus mollis interdum.</p>
                <p>
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                </p>
                <a href="#" className="coc-link">
                  Code of Conduct
                </a>
              </div>
            </div>
          </div>
          <div className="flex-item rt-info">
            <h2>The Organizer</h2>
            <div className="rt-logo">
              <span className="sr-only">RedTurtle</span>
              <RedTurtleSVG />
            </div>
            <p>via Nino Bixio, 4 - 44122 Ferrara (ITALY)</p>
            <div className="contact-wrapper">
              <label>Tel.</label>
              <span>(+39) 0532 1915958</span>
            </div>
            <div className="contact-wrapper">
              <label>Email</label>
              <a href="mailto:PC19Staff@redturtle.it">PC19Staff@redturtle.it</a>
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
                  The Plone Open Source CMS/WCM is 2000-2017 by the Plone
                  Foundation and friends. Distrubuted under the GNU GPL licence.
                </span>
              </div>
            </div>
          </div>
          <div className="flex-item">
            <ul>
              <li>
                <a href="#">privacy policy</a>
              </li>
              <li>
                <a href="#">cookie</a>
              </li>
              <li>
                <a href="#">credits</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
