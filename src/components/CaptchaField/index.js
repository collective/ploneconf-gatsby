import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

// Define a custom component for handling the root position object
const CaptchaField = ({ onChange }) => (
  <ReCAPTCHA
    style={{ display: 'inline-block' }}
    theme="dark"
    onChange={onChange}
    sitekey={process.env.GATSBY_CAPTCHA_SITEKEY}
  />
);

export default CaptchaField;
