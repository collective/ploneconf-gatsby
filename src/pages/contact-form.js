import React from 'react';
import Form from 'react-jsonschema-form';
import CaptchaField from '../components/CaptchaField';
import PageHeader from '../components/PageHeader';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      captchaValue: null,
      captchaExpired: false,
      key: Date.now(),
      formData: {},
      submitted: false,
      error: null,
      schema: {
        fieldsets: [
          {
            fields: ['name', 'from', 'subject', 'message', 'captcha'],
            id: 'default',
            title: 'default',
          },
        ],
        properties: {
          name: {
            title: 'Name',
            description: 'Please enter your full name.',
            type: 'string',
          },
          from: {
            title: 'From',
            description: 'Please enter your email address.',
            type: 'string',
          },
          subject: { title: 'Subject', description: '', type: 'string' },
          message: {
            title: 'Message',
            description: 'Please enter the message you want to send.',
            type: 'string',
            widget: 'textarea',
          },
          captcha: { title: 'Captcha', type: 'string' },
        },
        required: ['name', 'from', 'subject'],
        type: 'object',
      },
      uiSchema: {
        message: {
          'ui:widget': 'textarea',
        },
        captcha: {
          'ui:widget': () => (
            <CaptchaField onChange={this.handleCaptchaChange} />
          ),
        },
      },
    };
  }

  handleCaptchaChange = value => {
    this.setState({ captchaValue: value, captchaExpired: value === null });
  };

  onSubmit = ({ formData }, e) => {
    fetch(`${process.env.GATSBY_API_URL}/@email-notification`, {
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
    const { ploneImage } = this.props.data;
    let message = '';
    if (submitted) {
      message = (
        <div className="info">Thank you! Your message has been send.</div>
      );
    } else if (error) {
      message = <div className="error">An error occurred: {error}</div>;
    }
    return (
      <Layout>
        <React.Fragment>
          <PageHeader
            img={ploneImage.image.childImageSharp}
            text={
              <React.Fragment>
                <h1>
                  <span>Contact</span> form
                </h1>
                <p className="subtitle">
                  Fill this form to contact <strong>Plone Conference</strong>{' '}
                  organizators
                </p>
              </React.Fragment>
            }
          />
          <article className="document-content contact-form">
            <div className="container">
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
            </div>
          </article>
        </React.Fragment>
      </Layout>
    );
  }
}

export default ContactForm;

export const query = graphql`
  query {
    ploneImage(_id: { eq: "sponsor-header-bg.jpg" }) {
      id
      image {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;
