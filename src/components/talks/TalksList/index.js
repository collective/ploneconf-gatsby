import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import Slider from 'react-slick';
import PersonImage from '../../people/PersonImage';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './index.scss';

const TalksList = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allPloneTalk {
            edges {
              node {
                ...TalkFragment
              }
            }
          }
          allPlonePerson {
            edges {
              node {
                ...Person
              }
            }
          }
        }
      `}
      render={({ allPloneTalk, allPlonePerson }) => {
        const talks =
          allPloneTalk.edges && allPloneTalk.edges.length
            ? allPloneTalk.edges.filter(({ node }) => node.is_keynote !== true)
            : [];
        const people =
          allPlonePerson.edges && allPlonePerson.edges.length
            ? allPlonePerson.edges
            : [];

        const getSpeaker = function(id) {
          var ret = null;
          people.forEach(_person => {
            let person = _person.node;
            if (person.id == id) {
              ret = person;
            }
          });
          return ret;
        };

        if (talks.length === 0) {
          return '';
        }

        talks.forEach(node => {
          let talk = node.node;
          let speaker = null;
          if (talk.related_people) {
            speaker = getSpeaker(talk.related_people[0]._id);
          }
          talk.speaker = speaker;
        });

        /****** init slider ******/
        var sliderSettings = {
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 3,
          slidesToScroll: 2,
          autoplay: false,
          variableWidth: true,
          adaptiveHeight: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 520,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        };
        //   console.log('talks', talks);
        return (
          <div className="talks-list">
            <div className="black-block" />
            <div className="blue-block" />
            <div className="container">
              <h3>Talks</h3>
              {/* <div className="subtitle" /> */}
              <div className="talks-container">
                <Slider {...sliderSettings}>
                  {talks.map(talk => (
                    <div className="talk" key={talk.node.id}>
                      <div className="col speaker">
                        <PersonImage
                          person={talk.node.speaker}
                          size="small"
                          viewDefaultImage={true}
                        />
                      </div>
                      <div className="col talk-data">
                        <div className="data">
                          <div className="speakers">
                            {talk.node.related_people.map(function(rp) {
                              var p = getSpeaker(rp._id);
                              if (p) {
                                return (
                                  <Link to={p._path} title="details" key={p.id}>
                                    {p.title}
                                  </Link>
                                );
                              }
                            })}
                          </div>
                          <h4>
                            <Link to={talk.node._path} title="details">
                              {talk.node.title}
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};

TalksList.propTypes = {};

export default TalksList;
