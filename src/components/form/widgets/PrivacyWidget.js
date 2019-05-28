import React from 'react';
import { bool, func, string } from 'prop-types';
import { Link } from 'gatsby';

const PrivacyWidget = ({
  value,
  id,
  description,
  handleUpdate,
  hasError,
  fieldError,
}) => (
  <div className="form-group">
    <div className="form-check">
      <label htmlFor={id} className="form-check-label">
        I agree to the terms and conditions
      </label>
      <input
        type="checkbox"
        className="form-check-input"
        defaultChecked={value === true}
        checked={value}
        id={id}
        name={id}
        onChange={e => handleUpdate({ id, value: e.target.checked })}
      />
      {description && description.length ? (
        <small id={`${id}Help`} className="form-text text-muted">
          {description} <Link to="/privacy-policy">terms and conditions</Link>
        </small>
      ) : (
        ''
      )}
      {hasError ? <div className="invalid-feedback">{fieldError}</div> : ''}
    </div>
  </div>
);

PrivacyWidget.propTypes = {
  id: string,
  value: bool,
  title: string,
  description: string,
  handleUpdate: func,
  hasError: bool,
  fieldError: string,
};

export default PrivacyWidget;
