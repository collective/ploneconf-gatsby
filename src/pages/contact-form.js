import React from 'react';
import Layout from '../components/Layout';
import FormContainer from '../components/form/FormContainer';

const ContactForm = () => (
  <Layout context={{ _type: 'ContactForm' }}>
    <article className="document-content contact-form">
      <div className="container">
        <div className="talk-submission-form container">
          <FormContainer
            withCaptcha={true}
            schemaEndpoint="@contact-form"
            actionEndpoint="@email-notification"
          />
        </div>
      </div>
    </article>
  </Layout>
);

export default ContactForm;
