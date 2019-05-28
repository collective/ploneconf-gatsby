import React from 'react';
import { string, func, bool } from 'prop-types';

const TextLineWidget = ({ value, id, handleUpdate, required, hasError }) => (
  <input
    type="text"
    className={hasError ? 'form-control is-invalid' : 'form-control'}
    value={value ? value : ''}
    id={id}
    name={id}
    required={required}
    onChange={e => handleUpdate({ id, value: e.target.value })}
  />
);

TextLineWidget.propTypes = {
  id: string,
  value: string,
  handleUpdate: func,
  required: bool,
  hasError: bool,
};

export default TextLineWidget;
