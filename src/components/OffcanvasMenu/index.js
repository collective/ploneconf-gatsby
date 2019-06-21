import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';

import './index.scss';

const OffcanvasMenu = () => (
  <div className="collapse-menu">
    <Menu
      customBurgerIcon={
        <div className="menu-icon-wrapper">
          <FontAwesomeIcon icon={faBars} />
        </div>
      }
      customCrossIcon={
        <div className="menu-icon-wrapper">
          <span className="sr-only">Close</span>
          <FontAwesomeIcon icon={faTimes} />
        </div>
      }
      bodyClassName={'burger-menu-open'}
      right
    >
      <div className="navs-wrapper">
        <Link to="/call-for-speakers">Call for speakers</Link>
        <Link to="/venue">Venue</Link>
        <Link to="/ferrara">Ferrara</Link>
        <Link to="/sponsors">Sponsors</Link>
        {/* <Link to="/code-of-conduct">Code of Conduct</Link> */}
        <Link to="/contact-form">Contacts</Link>
        <div className="get-tickets-wrapper">
          <a
            href="https://ploneconference2019.eventbrite.com/?aff=ploneconf"
            className="get-tickets"
          >
            Get tickets!
          </a>
        </div>
      </div>
    </Menu>
  </div>
);

export default OffcanvasMenu;
