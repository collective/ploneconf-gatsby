import React from 'react';
import { bool, shape, any, string, func } from 'prop-types';
import TextLineWidget from '../widgets/TextLineWidget';
import TextAreaWidget from '../widgets/TextAreaWidget';
import SelectWidget from '../widgets/SelectWidget';
import MultiSelectWidget from '../widgets/MultiSelectWidget';
// import CaptchaField from '../CaptchaField';

import './index.scss';

const FieldWrapper = ({ value, properties, isRequired, id, handleUpdate }) => {
  const { type, widget, title, description, mode, choices } = properties;
  if (mode && mode === 'hidden') {
    return '';
  }
  let FieldComponent = TextLineWidget;

  switch (type) {
    case 'string':
      if (widget === 'textarea') {
        FieldComponent = TextAreaWidget;
      } else if (choices) {
        FieldComponent = SelectWidget;
      }
      break;
    case 'array':
      FieldComponent = MultiSelectWidget;
    default:
      break;
  }
  console.log(properties);
  let cssClass = isRequired ? 'field required' : 'field';
  return (
    <div className={cssClass}>
      <label htmlFor={id}>{title}</label>
      {description && description.length ? (
        <p className="description">{description}</p>
      ) : (
        ''
      )}
      <FieldComponent
        id={id}
        value={value}
        properties={properties}
        handleUpdate={handleUpdate}
      />
    </div>
  );
};

FieldWrapper.propTypes = {
  isRequired: bool,
  id: string,
  value: any,
  properties: shape({
    description: string,
    title: string,
    type: string,
    widget: string,
  }),
  handleUpdate: func,
};

export default FieldWrapper;
