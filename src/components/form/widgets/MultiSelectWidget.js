import React from 'react';
import { string, arrayOf, shape, func } from 'prop-types';
import Select from 'react-select';

const MultiSelectWidget = ({ value, id, properties, handleUpdate }) => {
  const options = properties.items.choices.map(option => {
    return { value: option[0], label: option[1] };
  });

  const valueOptions = value
    ? options.filter(option => value.includes(option.value))
    : [];
  return (
    <Select
      isClearable={true}
      name={id}
      id={id}
      value={valueOptions}
      isMulti={true}
      options={options}
      onChange={selectedOptions =>
        handleUpdate({ id, value: selectedOptions.map(option => option.value) })
      }
    />
  );
};

MultiSelectWidget.propTypes = {
  id: string,
  value: arrayOf(string),
  properties: shape({
    choice: arrayOf(string),
  }),
  handleUpdate: func,
};

export default MultiSelectWidget;
