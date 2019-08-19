import React from 'react';
import { object, bool, string } from 'prop-types';
import Img from 'gatsby-image';
import UserSVG from '../../svg/UserSVG';
import './index.scss';

const PersonImage = ({ person, viewDefaultImage, size }) => {
  /**some code */
  console.log(person);
  let hasImage =
    person &&
    person.image &&
    person.image.childImageSharp &&
    person.image.childImageSharp.fixed;
  let view = hasImage || viewDefaultImage;
  if (!view) {
    return '';
  }
  return (
    <div className={(size ? size : '') + ' user-image'}>
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
  size: string,
  viewDefaultImage: bool,
};

export default PersonImage;
