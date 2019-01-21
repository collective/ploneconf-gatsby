import React from 'react';
import { graphql } from 'gatsby';

import Document from '../components/Document';
import Person from '../components/Person';
import Folder from '../components/Folder';
import Layout from '../components/Layout';
import Talk from '../components/Talk';

const componentFor = data => {
  const nodes = query => (query ? query['edges'] : []).map(edge => edge.node);

  if (data) {
    if (data['ploneDocument']) {
      return (
        <Document
          data={data['ploneDocument']}
          images={nodes(data['allPloneImage'])}
          files={nodes(data['allPloneFile'])}
        />
      );
    } else if (data['ploneTalk']) {
      console.log(data);
      return <Talk data={data['ploneTalk']} relator={data.refPerson} />;
    } else if (data['ploneFolder']) {
      return (
        <Folder
          data={data['ploneFolder']}
          images={nodes(data['allPloneImage'])}
          files={nodes(data['allPloneFile'])}
        />
      );
    } else if (data['plonePerson']) {
      return <Person data={data['plonePerson']} />;
    } else {
      return null;
    }
  } else {
    return null;
  }
};

const DefaultLayout = ({ data }) => (
  <Layout breadcrumbs={data.ploneBreadcrumbs}>{componentFor(data)}</Layout>
);

export default DefaultLayout;

export const query = graphql`
  query DefaultTemplateQuery($path: String!, $relator: String) {
    ploneDocument(_path: { eq: $path }) {
      ...Document
    }
    ploneFolder(_path: { eq: $path }) {
      ...Folder
    }
    ploneTalk(_path: { eq: $path }) {
      ...Talk
    }
    ploneBreadcrumbs(_path: { eq: $path }) {
      items {
        _id
        _path
        title
      }
    }
    refPerson: plonePerson(id: { eq: $relator }) {
      ...Person
    }
    plonePerson(_path: { eq: $path }) {
      ...Person
    }
  }
`;
