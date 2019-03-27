import React, { Component } from 'react';
import { bool, string } from 'prop-types';
import { Link } from 'gatsby';

import LogoJoySVG from '../svg/LogoJoySVG';
import OffcanvasMenu from '../OffcanvasMenu';

import './index.scss';

class Header extends Component {
  static propTypes = {
    navActive: string,
    isHome: bool,
    is404: bool,
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

    const { isHome, is404 } = this.props;
    const headerLocationClass = isHome
      ? ' is-home'
      : is404
      ? ' is-404'
      : ' is-not-home';

    const cssClass = `${headerStatusClass}${headerLocationClass}`.trim();

    return (
      <header id="header-navigation" className={`${cssClass}`}>
        {isHome && <div className="border-top" />}
        <div className="container flex-helper">
          <Link className="logo-wrapper" to="/">
            <LogoJoySVG />
            <div className="logo-text-wrapper">
              <p className="ploneconf">Plone Conference</p>
              <p className="year">2019</p>
            </div>
          </Link>
          <div className="nav-wrapper">
            <Link to="/speakers" activeClassName="active">
              <span>Call for speakers</span>
            </Link>
            <Link to="/sponsors" activeClassName="active">
              <span>Sponsors</span>
            </Link>
            <Link to="/contacts" activeClassName="active">
              <span>Contacts</span>
            </Link>
            <Link
              to="/tickets"
              className="get-tickets"
              activeClassName="active"
            >
              <span>Get tickets!</span>
            </Link>
          </div>
          <OffcanvasMenu />
        </div>
      </header>
    );
  }
}

export default Header;
