import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import HeaderWrapper from './HeaderWrapper';
import { object } from 'prop-types';

const TalkHeader = ({ context }) => (
  <StaticQuery
    query={graphql`
      query {
        ploneImage(_id: { eq: "talk-image.jpeg" }) {
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
      const { ploneImage, people } = data;
      const { title, related_people } = context;

      const speakerNames = related_people
        .map(person => person.title)
        .join(', ');

      return (
        <HeaderWrapper
          img={ploneImage ? ploneImage.image.childImageSharp : null}
          text={
            title ? (
              /* <React.Fragment>
                <h1>{title}</h1>
                {speakerNames && <p>{speakerNames}</p>}
              </React.Fragment>*/
              <React.Fragment>
                <h1>Talks</h1>
                <p>October 23 - 24 - 25</p>
              </React.Fragment>
            ) : (
              ''
            )
          }
        />
      );
    }}
  />
);

TalkHeader.propTypes = {
  context: object,
};

export default TalkHeader;
