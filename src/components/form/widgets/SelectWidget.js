import React from 'react';
import { string, arrayOf, shape, func } from 'prop-types';
import Select from 'react-select';

const SelectWidget = ({ value, id, properties, handleUpdate }) => {
  const options = properties.choices.map(option => {
    return { value: option[0], label: option[1] };
  });
  const valueOption = options.filter(option => option.value === value);
  return (
    <Select
      isClearable={true}
      name={id}
      id={id}
      value={valueOption && valueOption.length ? valueOption[0] : null}
      options={options}
      onChange={selectedOption =>
        handleUpdate({ id, value: selectedOption ? selectedOption.value : '' })
      }
    />
  );
};

SelectWidget.propTypes = {
  id: string,
  value: string,
  handleUpdate: func,
  properties: shape({
    choice: arrayOf(string),
  }),
};

export default SelectWidget;
