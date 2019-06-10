import React from 'react';
import { bool, shape, any, string, func } from 'prop-types';
import cx from 'classnames';
import TextLineWidget from '../widgets/TextLineWidget';
import TextAreaWidget from '../widgets/TextAreaWidget';
import SelectWidget from '../widgets/SelectWidget';
import MultiSelectWidget from '../widgets/MultiSelectWidget';
import CaptchaWidget from '../widgets/CaptchaWidget';
import FileUploadWidget from '../widgets/FileUploadWidget';
import CheckboxWidget from '../widgets/CheckboxWidget';
import PrivacyWidget from '../widgets/PrivacyWidget';
import { Link } from 'gatsby';

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
  const hasError = fieldError && fieldError.length > 0;

  if (type === 'boolean' && id === 'privacy') {
    return (
      <PrivacyWidget
        {...properties}
        hasError={hasError}
        handleUpdate={handleUpdate}
        fieldError={fieldError}
        id={id}
      />
    );
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
    case 'boolean':
      FieldComponent = CheckboxWidget;
      break;
    default:
      break;
  }

  return (
    <div className={cx([`form-group ${id}Group`, { required: isRequired }])}>
      <label htmlFor={id}>{title}</label>
      <FieldComponent
        id={id}
        value={value}
        properties={properties}
        required={isRequired}
        handleUpdate={handleUpdate}
        hasError={hasError}
      />
      {hasError ? <small className="invalid-feedback">{fieldError}</small> : ''}
      {description && description.length ? (
        <small id={`${id}Help`} className="form-text text-muted">
          {description}
        </small>
      ) : (
        ''
      )}
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
