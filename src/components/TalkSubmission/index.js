import React from 'react';
import Form from 'react-jsonschema-form';

class TalkSubmission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      captchaValue: null,
      captchaExpired: false,
      schema: {},
      uiSchema: {},
      key: Date.now(),
      formData: {},
      submitted: false,
      error: null,
    };
  }

  handleCaptchaChange = value => {
    this.setState({ captchaValue: value, captchaExpired: value === null });
  };

  onSubmit = ({ formData }, e) => {
    fetch(`${process.env.GATSBY_API_URL}/@submit-proposal`, {
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

  onChange = form => {
    this.setState({ ...this.state, formData: form.formData });
  };

  validate = (formData, errors) => {
    const { captchaValue, captchaExpired } = this.state;
    if (!captchaValue || captchaExpired) {
      errors.captcha.addError('Captcha required');
    }
    return errors;
  };

  render() {
    const { schema, uiSchema, key, formData, submitted, error } = this.state;
    let message = '';
    let statusMessage = '';
    if (submitted) {
      message = (
        <div className="info">Thank you! Your proposal has been submitted.</div>
      );
    } else if (error) {
      message = <div className="error">An error occurred: {error}</div>;
    }

    return (
      <div className="talk-submission-form container">
        <div className="status-message">{message}</div>
        <Form
          key={key}
          schema={schema}
          uiSchema={uiSchema}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          formData={formData}
          onError={e => {
            console.log('errors: ', e);
          }}
          validate={this.validate}
        />
      </div>
    );
  }
}

export default TalkSubmission;
