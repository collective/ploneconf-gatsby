import React from 'react';
import { graphql, Link } from 'gatsby';
import RichText from '../../RichText';
import PersonImage from '../PersonImage';
import './index.scss';

const PeopleHome = ({ data, title, images = [], files = [], people = [] }) => {
  if (data.items) {
    //alpha sort of items
    data.items
      .filter(item => item._type == 'Person')
      .sort(function(a, b) {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      })
      .map(item => {
        item.person = people.edges.filter(function(el) {
          return el.node.id == item._id;
        })[0].node;
      });
  }
  return (
    <React.Fragment>
      <article key={data._id} className="document-content people-home">
        <div className="container">
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
              {data.items.map((item, index) => {
                //                console.log(item);
                return [
                  <li key={item._path} className="list-group-item">
                    <PersonImage
                      person={item.person}
                      size="small"
                      viewDefaultImage={true}
                    />
                    <div className="item-content">
                      <Link to={item._path}>
                        <h3> {item.title}</h3>
                      </Link>
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

export default PeopleHome;
