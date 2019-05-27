import React from 'react';
import { string, func } from 'prop-types';

const TextLineWidget = ({ value, id, handleUpdate }) => (
  <input
    type="text"
    value={value ? value : ''}
    id={id}
    name={id}
    onChange={e => handleUpdate({ id, value: e.target.value })}
  />
);

TextLineWidget.propTypes = {
  id: string,
  value: string,
  handleUpdate: func,
};

export default TextLineWidget;
