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
        {/* <Link to="/speakers">Call for speakers</Link> */}
        <Link to="/sponsors">Sponsors</Link>
        <Link to="/code-of-conduct">Code of Conduct</Link>
        {/* <Link to="/contacts">Contacts</Link> */}
        {/* <div className="get-tickets-wrapper">
          <Link to="/tickets" className="get-tickets">
            Get tickets!
          </Link>
        </div> */}
      </div>
    </Menu>
  </div>
);

export default OffcanvasMenu;
