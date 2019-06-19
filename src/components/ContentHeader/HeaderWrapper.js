import React from 'react';
import Img from 'gatsby-image';
import { shape, object, any } from 'prop-types';
import Helmet from 'react-helmet';

const HeaderWrapper = ({ img, text }) => (
  <header className="page-header">
    {img && (
      <Helmet>
        <meta property="og:image" content={img.fluid.src} />
        <meta
          name="twitter:image"
          content={`https://2019.ploneconf.org${img.fluid.src}`}
        />
      </Helmet>
    )}
    <div className="header-content">
      {img && (
        <div className="bg-image">
          <Img fluid={img.fluid} role="presentation" />
        </div>
      )}
      {text}
    </div>
  </header>
);

HeaderWrapper.propTypes = {
  img: shape({
    fluid: object,
  }),
  text: any,
};

export default HeaderWrapper;
