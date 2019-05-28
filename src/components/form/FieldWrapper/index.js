import React from 'react';
import { bool, shape, any, string, func } from 'prop-types';
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

  // let labelText =
  //   id === 'privacy' ? (
  //     <label htmlFor={id} className="form-check-label">
  //       I agree to the terms and conditions
  //       {/* <Link to="/privacy-policy">terms and conditions</Link> */}
  //     </label>
  //   ) : (
  //     <label htmlFor={id}>{title}</label>
  //   );
  return (
    <div className="form-group">
      <label htmlFor={id}>{title}</label>
      {description && description.length ? (
        <small id={`${id}Help`} className="form-text text-muted">
          {description}
        </small>
      ) : (
        ''
      )}
      <FieldComponent
        id={id}
        value={value}
        properties={properties}
        required={isRequired}
        handleUpdate={handleUpdate}
        hasError={hasError}
      />
      {hasError ? <div className="invalid-feedback">{fieldError}</div> : ''}
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
