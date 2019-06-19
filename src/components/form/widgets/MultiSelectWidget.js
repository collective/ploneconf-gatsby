import React from 'react';
import { string, arrayOf, shape, func, bool } from 'prop-types';
import Select from 'react-select';
import cx from 'classnames';

const MultiSelectWidget = ({
  value,
  id,
  properties,
  handleUpdate,
  hasError,
}) => {
  const options = properties.items.choices.map(option => {
    return { value: option[0], label: option[1] };
  });

  const valueOptions = value
    ? options.filter(option => value.includes(option.value))
    : [];
  return (
    <Select
      className={cx([
        `${id}-select`,
        'react-select-container',
        'multiselect',
        { 'is-invalid': hasError },
      ])}
      classNamePrefix="react-select"
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
  hasError: bool,
};

export default MultiSelectWidget;
