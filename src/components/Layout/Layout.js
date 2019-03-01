import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../../scss/_base.scss';

import Header from '../Header';
import Breadcrumbs from '../Breadcrumbs';
import NavBar from '../NavBar';
import Footer from '../Footer';

const Layout = ({ breadcrumbs, children, data }) => (
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
          <NavBar active={active} />
          <Header siteData={data.site.siteMetadata} />
          {breadcrumbs && <Breadcrumbs data={breadcrumbs} />}
          <div>{children}</div>
          <Footer />
        </>
      );
    }}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
