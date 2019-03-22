import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

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
        <a href="#">Call for speakers</a>
        <a href="/sponsors">Sponsors</a>
        <a href="#">Contacts</a>
        <div className="get-tickets-wrapper">
          <a href="#" className="get-tickets">
            Get tickets!
          </a>
        </div>
      </div>
    </Menu>
  </div>
);

export default OffcanvasMenu;
