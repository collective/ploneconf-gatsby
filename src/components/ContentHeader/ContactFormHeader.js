import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import HeaderWrapper from './HeaderWrapper';

const ContactForm = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => {
      const { ploneImage } = data;
      const text = (
        <React.Fragment>
          <h1>
            <span>Contact</span> form
          </h1>
          <p className="subtitle">
            Fill this form to contact <strong>Plone Conference</strong>{' '}
            organizators
          </p>
        </React.Fragment>
      );
      return (
        <HeaderWrapper
          img={ploneImage ? ploneImage.image.childImageSharp : null}
          text={text}
        />
      );
    }}
  />
);

ContactForm.propTypes = {};

export default ContactForm;
