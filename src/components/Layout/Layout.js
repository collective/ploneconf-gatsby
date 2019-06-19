import React from 'react';
import PropTypes, { array } from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import cx from 'classnames';
import ContentHeader from '../ContentHeader';
import Breadcrumbs from '../Breadcrumbs';

import './index.scss';

import Header from '../Header';
// import NavBar from '../NavBar';
import Footer from '../Footer';

const Layout = ({
  children,
  isHome,
  is404,
  context,
  images,
  files,
  breadcrumbs,
}) => (
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
      const contextTitle = context && context.title ? context.title : '';
      const contextDescription =
        context && context.description ? context.description : '';
      const title =
        contextTitle && contextTitle.length
          ? `${contextTitle} - ${data.site.siteMetadata.title}`
          : data.site.siteMetadata.title;
      const description = contextDescription.length
        ? contextDescription
        : data.site.siteMetadata.title;
      return (
        <>
          <Helmet>
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content={data.site.siteMetadata.title} />

            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta name="twitter:title" content={title} />

            <meta property="og:description" content={description} />
            <meta name="description" content={description} />
            <meta name="twitter:description" content={description} />

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
            {context ? (
              <ContentHeader context={context} images={images} files={files} />
            ) : (
              ''
            )}
            {breadcrumbs && <Breadcrumbs data={breadcrumbs} skipLast={true} />}
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
  context: PropTypes.object,
  images: array,
  files: array,
  breadcrumbs: PropTypes.object,
};

export default Layout;
