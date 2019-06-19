import React from 'react';
import { bool, string } from 'prop-types';
import FieldWrapper from '../FieldWrapper';
// import CaptchaField from '../CaptchaField';

import './index.scss';

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      formData: {},
      submitted: false,
      validated: false,
    };
  }

  componentDidMount() {
    const { withCaptcha, schemaEndpoint } = this.props;
    fetch(`${process.env.GATSBY_API_URL}/${schemaEndpoint}`, {
      headers: new Headers({ Accept: 'application/json' }),
    })
      .then(res => res.json())
      .then(
        result => {
          const { schema } = result;
          if (withCaptcha) {
            // add captcha to schema
            schema.fieldsets[0].fields.push('captcha');
            schema.required.push('captcha');
            schema.properties.captcha = {
              title: 'Captcha',
              type: 'captcha',
            };
          }
          let formData = {};
          Object.keys(schema.properties).forEach(fieldId => {
            if (schema.properties[fieldId].mode !== 'hidden') {
              formData[fieldId] = null;
            }
          });
          this.setState({
            schema,
            formData,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  validateForm = () => {
    // validate required fields
    const { schema, formData } = this.state;
    const { required } = schema;

    let errors = {};
    required.forEach(id => {
      if (!formData[id]) {
        errors[id] = 'Required field.';
      }
    });
    return errors;
  };

  onSubmit = e => {
    e.preventDefault();
    const { formData } = this.state;
    const { actionEndpoint } = this.props;
    const errors = this.validateForm();
    if (Object.keys(errors).length > 0 && errors.constructor === Object) {
      this.setState({ ...this.state, errors, validated: true });
      return;
    }
    fetch(`${process.env.GATSBY_API_URL}/${actionEndpoint}`, {
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      method: 'POST',
      body: JSON.stringify(formData),
    })
      .then(res => {
        if (res.ok && res.status === 204) {
          this.setState({
            formData: {},
            key: Date.now(),
            submitted: true,
          });
        } else {
          return res.json();
        }
      })
      .then(result => {
        if (result) {
          this.setState({
            submitted: false,
            error: result.message,
          });
        }
      });
  };

  // resetForm = () => {
  //   const { schema } = this.state;
  //   let formData = {};
  //   Object.keys(schema.properties).forEach(fieldId => {
  //     if (schema.properties[fieldId].mode !== 'hidden') {
  //       formData[fieldId] = null;
  //     }
  //   });
  //   this.setState({ ...this.state, formData, errors: {} });
  // };

  updateFormValue = ({ id, value }) => {
    const { errors } = this.state;
    if (id in errors) {
      delete errors[id];
    }
    this.setState({
      ...this.state,
      formData: { ...this.state.formData, [id]: value },
      errors,
    });
  };

  // validate = (formData, errors) => {
  //   const { captchaValue, captchaExpired } = this.state;
  //   if (!captchaValue || captchaExpired) {
  //     errors.captcha.addError('Captcha required');
  //   }
  //   return errors;
  // };

  render() {
    const { schema, formData, errors, submitted, validated } = this.state;
    if (!schema) {
      return '';
    }
    let message = '';
    if (submitted) {
      message = (
        <div className="alert alert-primary">
          Thank you! Your proposal has been submitted.
        </div>
      );
    } else if (Object.keys(errors).length) {
      message = (
        <div className="alert alert-danger">
          Please correct errors before submitting the form.
        </div>
      );
    }
    const { fieldsets } = schema;
    return (
      <div className="form-wrapper">
        <form
          onSubmit={this.onSubmit}
          method="POST"
          className={validated ? 'was-validated' : 'needs-validation'}
          noValidate
        >
          {fieldsets.map(fieldset => (
            <div
              className={`fieldset ${fieldset.id}`}
              key={`fieldset-${fieldset.id}`}
            >
              {fieldset.fields.map(fieldId => (
                <FieldWrapper
                  key={`field-${fieldId}`}
                  id={fieldId}
                  value={formData[fieldId]}
                  properties={schema.properties[fieldId]}
                  isRequired={schema.required.includes(fieldId)}
                  fieldError={errors[fieldId]}
                  handleUpdate={this.updateFormValue}
                />
              ))}
            </div>
          ))}
          <div className="form-buttons">
            <button
              className="btn btn-primary btn-lg"
              name="submit"
              type="submit"
            >
              Submit
            </button>
            {/* <button
              type="reset"
              name="cancel"
              onClick={this.resetForm}
              className="btn"
            >
              Cancel
            </button> */}
          </div>
        </form>
        {message}
      </div>
    );
  }
}

FormContainer.propTypes = {
  withCaptcha: bool,
  schemaEndpoint: string,
  actionEndpoint: string,
};

export default FormContainer;
