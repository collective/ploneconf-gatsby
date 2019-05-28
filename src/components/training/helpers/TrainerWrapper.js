import React from 'react';
import { object, string } from 'prop-types';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const TrainerWrapper = ({ title, _path, image }) => (
  <div className="trainer-wrapper">
    <Link to={_path}>
      <h4>{title}</h4>
      {image && image.childImageSharp ? (
        <Img resolutions={image.childImageSharp.fixed} />
      ) : null}
    </Link>
  </div>
);

TrainerWrapper.propTypes = {
  title: string,
  _path: string,
  image: object,
};

export default TrainerWrapper;
