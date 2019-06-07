import React from 'react';
import { Link } from 'gatsby';

import redturtle from './redturtle.png';
import HPhrSVG from '../svg/HPhrSVG';
import HPhrAltSVG from '../svg/HPhrAltSVG';

import './index.scss';

const HPSponsorsPartners = () => (
  <div className="hp-sponsors-partners">
    <div className="container">
      <h2 className="title">
        Official <strong>sponsors</strong> and <strong>partner</strong>
      </h2>
      <div className="sponsors-partners">
        <div className="links-row">
          <div className="sponsor-link organizer">
            <p className="sponsor-type">Organizer</p>
            <a href="#">
              <img src={redturtle} alt="RedTurtle" />
            </a>
          </div>
          <div className="sponsor-link">
            <p className="sponsor-type gold">
              <strong>Gold</strong> Sponsor
            </p>
            <a href="#">
              <img src={redturtle} alt="RedTurtle" />
            </a>
          </div>
          <div className="sponsor-link">
            <p className="sponsor-type gold">
              <strong>Gold</strong> Sponsor
            </p>
            <a href="#">
              <img src={redturtle} alt="RedTurtle" />
            </a>
          </div>
        </div>
        <div className="hr">
          <HPhrSVG />
        </div>
        <div className="links-row">
          <p className="sponsor-type silver">
            <strong>Silver</strong> Sponsor
          </p>
          <div className="sponsor-link">
            <a href="#">
              <img src={redturtle} alt="RedTurtle" />
            </a>
          </div>
          <div className="sponsor-link">
            <a href="#">
              <img src={redturtle} alt="RedTurtle" />
            </a>
          </div>
          <div className="sponsor-link">
            <a href="#">
              <img src={redturtle} alt="RedTurtle" />
            </a>
          </div>
          <div className="sponsor-link">
            <a href="#">
              <img src={redturtle} alt="RedTurtle" />
            </a>
          </div>
        </div>
        <div className="hr">
          <HPhrAltSVG />
        </div>
        <div className="links-row">
          <p className="sponsor-type bronze">
            <strong>Bronze</strong> Sponsor
          </p>
          <div className="sponsor-link">
            <a href="#">
              <img src={redturtle} alt="RedTurtle" />
            </a>
          </div>
          <div className="sponsor-link">
            <a href="#">
              <img src={redturtle} alt="RedTurtle" />
            </a>
          </div>
          <div className="sponsor-link">
            <a href="#">
              <img src={redturtle} alt="RedTurtle" />
            </a>
          </div>
        </div>
        <div className="hr">
          <HPhrSVG />
        </div>
        <div className="links-row">
          <p className="sponsor-type partners">Partners</p>
          <div className="sponsor-link">
            <a href="#">
              <img src={redturtle} alt="RedTurtle" />
            </a>
          </div>
          <div className="sponsor-link">
            <a href="#">
              <img src={redturtle} alt="RedTurtle" />
            </a>
          </div>
          <div className="sponsor-link">
            <a href="#">
              <img src={redturtle} alt="RedTurtle" />
            </a>
          </div>
        </div>
      </div>
      <div className="cta-sponsors">
        <Link to="/sponsors">
          <span>Become a sponsor</span>
        </Link>
      </div>
    </div>
  </div>
);

export default HPSponsorsPartners;
