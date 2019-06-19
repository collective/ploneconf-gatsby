import React from 'react';
import { string, arrayOf, shape, func, bool } from 'prop-types';
import Select from 'react-select';
import cx from 'classnames';

const SelectWidget = ({ value, id, properties, handleUpdate, hasError }) => {
  const options = properties.choices.map(option => {
    return { value: option[0], label: option[1] };
  });
  const valueOption = options.filter(option => option.value === value);
  return (
    <Select
      className={cx([
        `${id}-select`,
        'react-select-container',
        { 'is-invalid': hasError },
      ])}
      classNamePrefix="react-select"
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
  hasError: bool,
};

export default SelectWidget;
