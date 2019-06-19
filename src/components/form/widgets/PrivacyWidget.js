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
  required,
}) => (
  <div className="form-group">
    <div className="form-check">
      <input
        type="checkbox"
        className="form-check-input"
        defaultChecked={value === true}
        checked={value}
        id={id}
        name={id}
        required={required}
        onChange={e => handleUpdate({ id, value: e.target.checked })}
      />
      <label htmlFor={id} className="form-check-label">
        I agree to the terms and conditions
      </label>
      {hasError ? <small className="invalid-feedback">{fieldError}</small> : ''}
      {description && description.length ? (
        <small id={`${id}Help`} className="form-text text-muted">
          {description} <Link to="/privacy-policy">terms and conditions</Link>
        </small>
      ) : (
        ''
      )}
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
  required: bool,
};

export default PrivacyWidget;
