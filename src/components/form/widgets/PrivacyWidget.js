import React from 'react';
import { bool, func, string } from 'prop-types';
import { Link } from 'gatsby';

const PrivacyWidget = ({ value, id, handleUpdate }) => (
  <React.Fragment>
    <input
      type="checkbox"
      defaultChecked={value}
      id={id}
      name={id}
      onChange={e => handleUpdate({ id, value: e.target.checked })}
    />{' '}
    <span>
      I agree to the <Link to="/privacy-policy">terms and conditions</Link>
    </span>
  </React.Fragment>
);

PrivacyWidget.propTypes = {
  id: string,
  value: bool,
  handleUpdate: func,
};

export default PrivacyWidget;
