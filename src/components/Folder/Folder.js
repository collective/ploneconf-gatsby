import React from 'react';
import { graphql, Link } from 'gatsby';
import RichText from '../RichText';
import HrAltSVG from '../svg/HrAltSVG';
import HrSVG from '../svg/HrSVG';
import './Folder.scss';

const Folder = ({ data, title, images = [], files = [] }) => {
  const listedTypes = new Set([
    'Document',
    'Folder',
    'News Item',
    'Event',
    'Collection',
    'File',
    'Talk',
    'Training',
    'Person',
  ]);

  let byPath = files.reduce(function(result, file) {
    result[file._path] = file;
    return result;
  }, {});
  if (data.items) {
    //alpha sort of items
    data.items.sort(function(a, b) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  }
  return (
    <React.Fragment>
      <article key={data._id} className="document-content">
        <div className="container">
          <h1>{title ? title : data.title}</h1>
          <p>
            <strong>{data.description}</strong>
          </p>
          {data.text ? (
            <RichText
              serialized={data.text.react}
              images={images}
              files={files}
            />
          ) : null}

          <nav key={data._id}>
            <ul className="list-group">
              {data.items
                .filter(
                  item =>
                    listedTypes.has(item._type) &&
                    item._path !== '/docs/index/',
                )
                .map((item, index) => {
                  let alt = index % 2 == 0;
                  return [
                    <li key={item._path} className="list-group-item">
                      {alt ? <HrSVG /> : <HrAltSVG />}
                      <div className="item-content">
                        <div>
                          {byPath[item._path] ? (
                            <a
                              href={byPath[item._path].file.publicURL}
                              download={byPath[item._path].file.filename}
                            >
                              <h3> {item.title}</h3>
                            </a>
                          ) : (
                            <Link to={item._path}>
                              <h3> {item.title}</h3>
                            </Link>
                          )}
                        </div>
                        {item.description ? <p>{item.description}</p> : null}
                      </div>
                    </li>,
                  ];
                })}
            </ul>
          </nav>
        </div>
      </article>
    </React.Fragment>
  );
};

export default Folder;

export const query = graphql`
  fragment Site on PloneSite {
    id
    title
    _type
    items {
      _id
      _path
      _type
      description
      title
    }
    _path
  }

  fragment Folder on PloneFolder {
    id
    title
    description
    items {
      _id
      _path
      _type
      description
      title
    }
    _path
    image {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
