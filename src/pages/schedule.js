import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import ScheduleContainer from '../components/schedule/ScheduleContainer';

const Schedule = ({ data }) => (
  <Layout
    context={{
      _type: 'Schedule',
      image: data.ploneImage.image,
      title: 'Schedule',
      description: 'description of schedule',
    }}
  >
    <article className="document-content schedule-page">
      <div className="container">
        <ScheduleContainer />
      </div>
    </article>
  </Layout>
);

export default Schedule;
export const query = graphql`
  query {
    ploneImage(_id: { eq: "speakers-image.jpeg" }) {
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
