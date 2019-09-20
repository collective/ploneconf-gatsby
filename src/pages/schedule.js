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
      description: 'Talks, keynotes and lighting talks plan',
    }}
  >
    <article className="document-content schedule-page">
      <ScheduleContainer />
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
