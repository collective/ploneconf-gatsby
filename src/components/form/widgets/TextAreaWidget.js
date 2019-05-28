import React from 'react';
import { string, func, bool } from 'prop-types';

const TextAreaWidget = ({ value, id, handleUpdate, hasError }) => (
  <textarea
    rows="10"
    cols="80"
    className={hasError ? 'form-control is-invalid' : 'form-control'}
    value={value ? value : ''}
    name={id}
    id={id}
    onChange={e => handleUpdate({ id, value: e.target.value })}
  />
);

TextAreaWidget.propTypes = {
  id: string,
  value: string,
  handleUpdate: func,
  hasError: bool,
};

export default TextAreaWidget;
