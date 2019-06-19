import React from 'react';
import { Link } from 'gatsby';
import { StaticQuery, graphql } from 'gatsby';

import './Breadcrumbs.css';

const Breadcrumbs = ({ data, skipLast }) => (
  <StaticQuery
    query={graphql`
      query SiteMetadataQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={siteMetadataQuery => {
      const breadcrumbs = data.items;
      if (skipLast) {
        breadcrumbs.pop();
      }
      if (breadcrumbs.length === 0) {
        return '';
      }
      return (
        <nav className="breadcrumb-container">
          <ol className="breadcrumb container">
            <li
              className={
                breadcrumbs.length
                  ? 'breadcrumb-item'
                  : 'breadcrumb-item last-item'
              }
            >
              <Link to="/">{siteMetadataQuery.site.siteMetadata.title}</Link>
            </li>
            {breadcrumbs.map((item, index, original) => {
              const className =
                index + 1 === original.length
                  ? 'breadcrumb-item last-item'
                  : 'breadcrumb-item';
              return (
                <li key={item._id} {...{ className }}>
                  <Link to={item._path}>{item.title}</Link>
                </li>
              );
            })}
          </ol>
        </nav>
      );
    }}
  />
);

export default Breadcrumbs;
