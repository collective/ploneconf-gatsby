import React from 'react';
import { string } from 'prop-types';

const PloneCirleSVG = ({ className }) => (
  <svg
    width="284px"
    height="281px"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g fill="#222" fillRule="evenodd" opacity="0.101306734">
      <circle cx="123.5" cy="80.5" r="30.5" />
      <path d="M215 140.5c0 16.845-13.655 30.5-30.5 30.5S154 157.345 154 140.5s13.655-30.5 30.5-30.5a30.48 30.48 0 0 1 30.5 30.5z" />
      <circle cx="123.5" cy="202.5" r="30.5" />
      <path
        d="M142 0C63.576 0 0 62.904 0 140.5S63.576 281 142 281s142-62.904 142-140.5c0-37.263-14.96-73-41.59-99.349C215.778 14.803 179.66 0 142 0zm79.923 219.558c-38.125 37.705-97.859 43.515-142.674 13.876-44.815-29.639-62.23-86.472-41.598-135.745 20.634-49.273 73.57-77.265 126.438-66.859 52.869 10.407 90.947 56.314 90.949 109.65.043 29.68-11.884 58.151-33.135 79.1l.02-.022z"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

PloneCirleSVG.propTypes = {
  className: string,
};

export default PloneCirleSVG;
