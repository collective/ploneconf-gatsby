import React from 'react';
import { bool, string } from 'prop-types';
import FieldWrapper from '../FieldWrapper';
// import CaptchaField from '../CaptchaField';

// import './styles.scss';

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      formData: {},
      key: Date.now(),
      submitted: false,
    };
  }

  componentDidMount() {
    const { withCaptcha } = this.props;
    fetch(`${process.env.GATSBY_API_URL}/@talk-proposal`, {
      headers: new Headers({ Accept: 'application/json' }),
    })
      .then(res => res.json())
      .then(
        result => {
          const { schema } = result;
          if (withCaptcha) {
            // add captcha to schema
            schema.fieldsets[0].fields.push('captcha');
            schema.properties.captcha = {
              title: 'Captcha',
              type: 'string',
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

  onSubmit = () => {
    // fetch(`${process.env.GATSBY_API_URL}/@submit-proposal`, {
    //   headers: new Headers({
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   }),
    //   method: 'POST',
    //   body: JSON.stringify(formData),
    // })
    //   .then(res => {
    //     if (res.ok && res.status === 204) {
    //       this.setState({
    //         formData: {},
    //         key: Date.now(),
    //         submitted: true,
    //       });
    //     } else {
    //       return res.json();
    //     }
    //   })
    //   .then(result => {
    //     if (result) {
    //       this.setState({
    //         submitted: false,
    //         error: result.message,
    //       });
    //     }
    //   });
  };

  updateFormValue = ({ id, value }) => {
    this.setState({
      ...this.state,
      formData: { ...this.state.formData, [id]: value },
    });
  };

  validate = (formData, errors) => {
    const { captchaValue, captchaExpired } = this.state;
    if (!captchaValue || captchaExpired) {
      errors.captcha.addError('Captcha required');
    }
    return errors;
  };

  render() {
    const { schema, formData } = this.state;
    console.log(formData);
    if (!schema) {
      return '';
    }
    let message = '';
    // if (submitted) {
    //   message = (
    //     <div className="info">Thank you! Your proposal has been submitted.</div>
    //   );
    // } else if (error) {
    //   message = <div className="error">An error occurred: {error}</div>;
    // }
    const { fieldsets } = schema;
    return (
      <div className="talk-submission-form">
        <div className="status-message">{message}</div>
        <form>
          {fieldsets.map(fieldset => (
            <div className={fieldset.id} key={`fieldset-${fieldset.id}`}>
              {fieldset.fields.map(fieldId => (
                <FieldWrapper
                  key={`field-${fieldId}`}
                  id={fieldId}
                  value={formData[fieldId]}
                  properties={schema.properties[fieldId]}
                  isRequired={schema.required.includes(fieldId)}
                  handleUpdate={this.updateFormValue}
                />
              ))}
            </div>
          ))}
        </form>
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
