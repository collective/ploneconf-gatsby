import React from 'react';
import { bool, func, string } from 'prop-types';

const CheckboxWidget = ({ value, id, handleUpdate }) => (
  <input
    type="checkbox"
    defaultChecked={value}
    id={id}
    name={id}
    onChange={e => handleUpdate({ id, value: e.target.checked })}
  />
);

CheckboxWidget.propTypes = {
  id: string,
  value: bool,
  handleUpdate: func,
};

export default CheckboxWidget;
