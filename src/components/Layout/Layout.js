import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import cx from 'classnames';

import './index.scss';

import Header from '../Header';
// import NavBar from '../NavBar';
import Footer from '../Footer';

const Layout = ({ children, isHome, is404 }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            subTitle
          }
        }
      }
    `}
    render={data => {
      const node = children.length
        ? children[0].props.data
        : children.props.data;
      const active = node
        ? node._path === '/frontpage/'
          ? '/'
          : node._path
        : null;
      return (
        <>
          <Helmet>
            <title>{data.site.siteMetadata.title}</title>
            <meta name="description" content="Plone Conference 2019" />
            <meta
              name="keywords"
              content="gatsby, plone, conference, ploneconf"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Lato:400,700|Open+Sans:300,400,600,700|Roboto:300,400,700"
              rel="stylesheet"
            />
          </Helmet>
          {/* <NavBar active={active} /> */}
          <Header
            siteData={data.site.siteMetadata}
            navActive={active}
            isHome={isHome}
            is404={is404}
          />
          <div
            id="content"
            className={cx({
              'is-home': isHome,
              'is-404': is404,
            })}
          >
            {children}
          </div>
          <Footer />
        </>
      );
    }}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
  is404: PropTypes.bool,
};

export default Layout;
