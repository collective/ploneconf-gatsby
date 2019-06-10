import React from 'react';
import { bool, func, string } from 'prop-types';

const CheckboxWidget = ({ value, id, handleUpdate, required }) => (
  <input
    type="checkbox"
    defaultChecked={value}
    id={id}
    name={id}
    required={required}
    onChange={e => handleUpdate({ id, value: e.target.checked })}
  />
);

CheckboxWidget.propTypes = {
  id: string,
  value: bool,
  handleUpdate: func,
  required: bool,
};

export default CheckboxWidget;
