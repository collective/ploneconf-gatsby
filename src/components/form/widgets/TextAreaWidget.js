import React from 'react';
import { string, func } from 'prop-types';

const TextAreaWidget = ({ value, id, handleUpdate }) => (
  <textarea
    rows="10"
    cols="80"
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
};

export default TextAreaWidget;
