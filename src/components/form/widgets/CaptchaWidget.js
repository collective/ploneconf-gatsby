import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { string, arrayOf, shape, func } from 'prop-types';

// Define a custom component for handling the root position object
const CaptchaWidget = ({ id, handleUpdate }) => (
  <ReCAPTCHA
    style={{ display: 'inline-block' }}
    theme="dark"
    onChange={token => handleUpdate({ id, value: token })}
    sitekey={process.env.GATSBY_CAPTCHA_SITEKEY}
  />
);

CaptchaWidget.propTypes = {
  id: string,
  value: string,
  handleUpdate: func,
  properties: shape({
    choice: arrayOf(string),
  }),
};

export default CaptchaWidget;
