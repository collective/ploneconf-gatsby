import React from 'react';
import { object } from 'prop-types';
import { graphql } from 'gatsby';

import Document from '../components/Document';
import CallForSpeakers from '../components/CallForSpeakers';
import TrainingHome from '../components/training/TrainingHome';
import PeopleHome from '../components/people/PeopleHome';
import TalksHome from '../components/talks/TalksHome';
import Person from '../components/people/Person';
import Training from '../components/training/Training';
import Talk from '../components/Talk';
import Folder from '../components/Folder';
import Layout from '../components/Layout';

const getInfosFor = data => {
  const nodes = query => (query ? query['edges'] : []).map(edge => edge.node);
  const images = nodes(data['allPloneImage']);
  const files = nodes(data['allPloneFile']);
  let result = {
    images,
    files,
  };
  if (data) {
    if (data['ploneDocument']) {
      const { ploneDocument } = data;
      result.context = ploneDocument;
      if (ploneDocument._id === 'call-for-speakers') {
        result.component = (
          <CallForSpeakers data={ploneDocument} images={images} files={files} />
        );
      } else {
        result.component = (
          <Document data={ploneDocument} images={images} files={files} />
        );
      }
      return result;
    } else if (data['ploneFolder']) {
      const { ploneFolder } = data;
      result.context = ploneFolder;
      switch (ploneFolder.title) {
        case 'Training':
          result.context = data.trainingHome;
          result.component = <TrainingHome images={images} files={files} />;
          break;
        case 'People':
          result.component = (
            <PeopleHome
              data={data['ploneFolder']}
              images={images}
              files={files}
              people={data.allPlonePerson}
            />
          );
          break;
        case 'Talks':
          result.component = (
            <TalksHome
              data={data['ploneFolder']}
              images={images}
              files={files}
              people={data.allPloneTalk}
            />
          );
          break;
        default:
          result.component = (
            <Folder data={data['ploneFolder']} images={images} files={files} />
          );
          break;
      }
      // if (ploneFolder.title === 'Training') {
      // } else if (ploneFolder.title === 'People') {
      // } else {
      // }
      return result;
    } else if (data['plonePerson']) {
      const plonePerson = data.plonePerson;
      result.context = plonePerson;
      const trainings = nodes(data['allPloneTraining']);
      const talks = nodes(data['allPloneTalk']);

      result.component = (
        <Person data={plonePerson} trainings={trainings} talks={talks} />
      );
      return result;
    } else if (data['ploneTraining']) {
      const ploneTraining = data.ploneTraining;
      result.context = ploneTraining;
      result.component = (
        <Training data={ploneTraining} people={data.allPlonePerson} />
      );
      return result;
    } else if (data['ploneTalk']) {
      const ploneTalk = data.ploneTalk;
      result.context = ploneTalk;
      result.component = (
        <Talk data={ploneTalk} people={data.allPlonePerson} images={images} />
      );
      return result;
    } else {
      return null;
    }
  } else {
    return null;
  }
};

const DefaultLayout = ({ data }) => {
  const { context, component, images, files } = getInfosFor(data);

  return (
    <Layout
      context={context}
      images={images}
      files={files}
      breadcrumbs={data.ploneBreadcrumbs}
    >
      {component}
    </Layout>
  );
};

DefaultLayout.propTypes = {
  data: object.isRequired,
};

export default DefaultLayout;

export const query = graphql`
  query DefaultTemplateQuery($path: String!) {
    ploneDocument(_path: { eq: $path }) {
      ...Document
    }
    ploneFolder(_path: { eq: $path }) {
      ...Folder
    }
    ploneBreadcrumbs(_path: { eq: $path }) {
      items {
        _id
        _path
        title
      }
    }
    plonePerson(_path: { eq: $path }) {
      ...Person
    }
    ploneTraining(_path: { eq: $path }) {
      ...Training
    }
    ploneTalk(_path: { eq: $path }) {
      ...TalkFragment
    }

    allPloneTraining {
      edges {
        node {
          ...TrainingFragment
        }
      }
    }
    allPloneTalk {
      edges {
        node {
          ...TalkFragment
        }
      }
    }
    allPloneImage(filter: { _backlinks: { eq: $path } }) {
      edges {
        node {
          ...Image
        }
      }
    }
    allPloneFile(filter: { _backlinks: { eq: $path } }) {
      edges {
        node {
          ...File
        }
      }
    }
    allPlonePerson {
      edges {
        node {
          id
          UID
          title
          _path
          image {
            childImageSharp {
              fixed(width: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
    trainingHome: ploneDocument(_id: { eq: "training" }) {
      ...Document
    }
  }
`;
