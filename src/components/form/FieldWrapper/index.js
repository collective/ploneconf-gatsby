import React from 'react';
import { bool, shape, any, string, func } from 'prop-types';
import TextLineWidget from '../widgets/TextLineWidget';
import TextAreaWidget from '../widgets/TextAreaWidget';
import SelectWidget from '../widgets/SelectWidget';
import MultiSelectWidget from '../widgets/MultiSelectWidget';
import CaptchaWidget from '../widgets/CaptchaWidget';
import FileUploadWidget from '../widgets/FileUploadWidget';

import './index.scss';

const FieldWrapper = ({
  value,
  properties,
  isRequired,
  id,
  handleUpdate,
  fieldError,
}) => {
  const {
    type,
    widget,
    title,
    description,
    mode,
    choices,
    format,
  } = properties;
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
      } else if (format === 'data-url') {
        FieldComponent = FileUploadWidget;
      }
      break;
    case 'array':
      FieldComponent = MultiSelectWidget;
      break;
    case 'captcha':
      FieldComponent = CaptchaWidget;
      break;
    default:
      break;
  }
  const hasError = fieldError && fieldError.length;
  let cssClass = hasError ? 'field error' : 'field';
  return (
    <div className={cssClass}>
      {hasError ? <div className="error-message">{fieldError}</div> : ''}
      <label className={isRequired ? 'required' : ''} htmlFor={id}>
        {title}
      </label>
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
  fieldError: string,
};

export default FieldWrapper;
