import React, { Component } from 'react';
import { bool, string } from 'prop-types';
import Link from 'gatsby-link';

import LogoJoySVG from '../svg/LogoJoySVG';
import OffcanvasMenu from '../OffcanvasMenu';

import './index.scss';

// const Header = ({ siteData, navActive }) => (
class Header extends Component {
  static propTypes = {
    navActive: string,
    isHome: bool,
  };

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
    const { isHome } = this.props;
    const headerLocationClass = isHome ? ' is-home' : ' is-not-home';

    const cssClass = `${headerStatusClass}${headerLocationClass}`.trim();

    return (
      <header id="header-navigation" className={`${cssClass}`}>
        {isHome && <div className="border-top" />}
        <div className="container flex-helper">
          <a className="logo-wrapper" href="/">
            <LogoJoySVG />
            <div className="logo-text-wrapper">
              <p className="ploneconf">Plone Conference</p>
              <p className="year">2019</p>
            </div>
          </a>
          <div className="nav-wrapper">
            <a href="#">Call for speakers</a>
            <Link to="/sponsors">Sponsors</Link>
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
