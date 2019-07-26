import React from 'react';
import { object, bool } from 'prop-types';
import Img from 'gatsby-image';
import UserSVG from '../../svg/UserSVG';
import './index.scss';

const PersonImage = ({ person, viewDefaultImage }) => {
  /**some code */
  let hasImage = person && person.image && person.image.childImageSharp;
  let view = hasImage || viewDefaultImage;
  if (!view) {
    return '';
  }
  return (
    <div className="user-image">
      <div className="rounded-image">
        {hasImage ? (
          <Img resolutions={person.image.childImageSharp.fixed} />
        ) : (
          <UserSVG />
        )}
      </div>
    </div>
  );
};

PersonImage.propTypes = {
  person: object,
  viewDefaultImage: bool,
};

export default PersonImage;
