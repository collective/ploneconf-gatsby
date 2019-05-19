import React from 'react';
// import CaptchaField from '../CaptchaField';

import './styles.scss';

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      data: {},
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

          //   const widgets = Object.keys(schema.properties).reduce(
          //     (widgetsSchema, fieldId) => {
          //       const field = schema.properties[fieldId];
          //       const widget = field.widget;
          //       if (field.mode === 'hidden') {
          //         widgetsSchema[fieldId] = {
          //           'ui:widget': 'hidden',
          //         };
          //       } else if (widget) {
          //         widgetsSchema[fieldId] = {
          //           'ui:widget': widget,
          //         };
          //       }
          //       return widgetsSchema;
          //     },
          //     {},
          //   );
          //   if (withCaptcha) {
          //     widgets.captcha = {
          //       'ui:widget': () => (
          //         <CaptchaField onChange={this.handleCaptchaChange} />
          //       ),
          //     };
          //   }
          this.setState({
            schema: schema,
            // uiSchema: {
            //   ...widgets,
            //   'ui:order': schema.fieldsets[0].fields,
            // },
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
      <div className="talk-submission-form">
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

export default FormContainer;
