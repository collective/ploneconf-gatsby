import React, { Component } from 'react';
import { bool, string } from 'prop-types';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import LogoJoySVG from '../svg/LogoJoySVG';
import OffcanvasMenu from '../OffcanvasMenu';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

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
    if (typeof window !== 'undefined') {
      /**** add active class to parent menu**** */
      var mainNav = window.document.querySelector('#main-nav');
      if (mainNav) {
        var active = mainNav.querySelector('li ul li .active');
        if (active) {
          active.parentNode.parentNode.parentNode
            .querySelector('a')
            .classList.add('active');
        }
      }
    }
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
            <ul id="main-nav">
              <li>
                <Link to="/call-for-speakers" activeClassName="active">
                  <span>Call for speakers</span>
                </Link>
              </li>
              <li>
                <Link to="/training" activeClassName="active">
                  <span>Training</span>
                </Link>
              </li>
              <li>
                <Link to="/talks" activeClassName="active">
                  <span>Talks</span>
                </Link>
              </li>
              {/*<li>
                <a href="#">
                  <span>Agenda</span>
                  <FontAwesomeIcon icon={faCaretDown} />
                </a>
                <ul>
                  <li>
                    <Link to="/schedule" activeClassName="active">
                      <span>Schedule</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/people" activeClassName="active">
                      <span>Speakers</span>
                    </Link>
                  </li>
                </ul>
              </li>*/}
              <li>
                <a href="#">
                  <span>Location</span>
                  <FontAwesomeIcon icon={faCaretDown} />
                </a>
                <ul>
                  <li>
                    <Link to="/venue" activeClassName="active">
                      <span>Venue</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/ferrara" activeClassName="active">
                      <span>Ferrara</span>
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/sponsors" activeClassName="active">
                  <span>Sponsors</span>
                </Link>
              </li>
              {/* <li><Link to="/code-of-conduct" activeClassName="active">
                <span>Code of Conduct</span>
                </Link> </li>*/}
              <li>
                <Link to="/contact-form" activeClassName="active">
                  <span>Contacts</span>
                </Link>
              </li>
              <li>
                <a
                  href="https://ploneconference2019.eventbrite.com/?aff=ploneconf"
                  className="get-tickets"
                >
                  <span>Get tickets!</span>
                </a>
              </li>
            </ul>
          </div>
          <OffcanvasMenu />
        </div>
      </header>
    );
  }
}

export default Header;
