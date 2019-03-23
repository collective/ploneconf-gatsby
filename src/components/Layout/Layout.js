import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../../scss/_base.scss';
import './index.scss';

import Header from '../Header';
// import NavBar from '../NavBar';
import Footer from '../Footer';

const Layout = ({ children, isHome }) => (
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
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Gatsby Starter Plone' },
              { name: 'keywords', content: 'gatsby, plone' },
            ]}
          />
          {/* <NavBar active={active} /> */}
          <Header
            siteData={data.site.siteMetadata}
            navActive={active}
            isHome={isHome}
          />
          <div id="content" className={isHome ? 'is-home' : ''}>
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
};

export default Layout;
