import React from 'react';
import { string, func, bool } from 'prop-types';

const TextAreaWidget = ({ value, id, handleUpdate, hasError, required }) => (
  <textarea
    rows="10"
    cols="80"
    className={hasError ? 'form-control is-invalid' : 'form-control'}
    value={value ? value : ''}
    name={id}
    id={id}
    required={required}
    onChange={e => handleUpdate({ id, value: e.target.value })}
  />
);

TextAreaWidget.propTypes = {
  id: string,
  value: string,
  handleUpdate: func,
  hasError: bool,
  required: bool,
};

export default TextAreaWidget;
