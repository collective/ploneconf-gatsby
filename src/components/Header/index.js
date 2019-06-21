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
            <Link to="/call-for-speakers" activeClassName="active">
              <span>Call for speakers</span>
            </Link>
            <Link to="/venue" activeClassName="active">
              <span>Venue</span>
            </Link>
            <Link to="/ferrara" activeClassName="active">
              <span>Ferrara</span>
            </Link>
            <Link to="/sponsors" activeClassName="active">
              <span>Sponsors</span>
            </Link>
            {/* <Link to="/code-of-conduct" activeClassName="active">
              <span>Code of Conduct</span>
            </Link> */}
            <Link to="/contact-form" activeClassName="active">
              <span>Contacts</span>
            </Link>
            <a
              href="https://ploneconference2019.eventbrite.com/?aff=ploneconf"
              className="get-tickets"
            >
              <span>Get tickets!</span>
            </a>
          </div>
          <OffcanvasMenu />
        </div>
      </header>
    );
  }
}

export default Header;
