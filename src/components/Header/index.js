import React, { Component } from 'react';

import LogoJoySVG from '../svg/LogoJoySVG';
import OffcanvasMenu from '../OffcanvasMenu';

import './index.scss';

// const Header = ({ siteData, navActive }) => (
class Header extends Component {
  state = {
    sticky: false,
  };

  handleScroll = () => {
    if (window.innerWidth > 600) {
      this.setState({
        sticky: window.pageYOffset >= 48,
      });
    } else {
      this.setState({
        sticky: false,
      });
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const headerStatusClass = this.state.sticky ? 'sticky' : '';

    // this.props.navActive === '/'
    const isHome = true;
    const headerLocationClass = isHome ? ' is-home' : '';

    const cssClass = `${headerStatusClass}${headerLocationClass}`.trim();

    return (
      <header id="header-navigation" className={`${cssClass}`}>
        {isHome && <div className="border-top" />}
        <div className="container flex-helper">
          <div className="logo-wrapper">
            <LogoJoySVG />
            <div className="logo-text-wrapper">
              <p className="ploneconf">Plone Conference</p>
              <p className="year">2019</p>
            </div>
          </div>
          <div className="nav-wrapper">
            <a href="#">Call for speakers</a>
            <a href="#">Sponsors</a>
            <a href="#">Contacts</a>
            <a href="#" className="get-tickets">
              Get tickets!
            </a>
          </div>
          <OffcanvasMenu />
        </div>
      </header>
    );
  }
}

export default Header;
