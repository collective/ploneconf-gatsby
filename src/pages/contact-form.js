import React from 'react';
import PageHeader from '../components/PageHeader';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import FormContainer from '../components/form/FormContainer';

class ContactForm extends React.Component {
  render() {
    const { ploneImage } = this.props.data;
    return (
      <Layout>
        <React.Fragment>
          <PageHeader
            img={ploneImage ? ploneImage.image.childImageSharp : null}
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
                <FormContainer
                  withCaptcha={true}
                  schemaEndpoint="@contact-form"
                  actionEndpoint="@email-notification"
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
