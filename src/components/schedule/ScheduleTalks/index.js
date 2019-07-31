import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Slider from 'react-slick';
import PersonImage from '../../people/PersonImage';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './index.scss';

const ScheduleTalks = () => {
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
            ? allPloneTalk.edges
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
        return (
          <div className="schedule-talks">
            <div className="black-block" />
            <div className="blue-block" />
            <div className="container">
              <h3>Talks</h3>
              <div className="subtitle">
                Lorem ipsum <span>dolor</span> sit amet.
              </div>
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
                            <a href="#">Speaker name 1</a>,{' '}
                            <a href="#">Speaker name 2</a>
                          </div>
                          <h4>
                            <a href="#">{talk.node.title}</a>
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

ScheduleTalks.propTypes = {};

export default ScheduleTalks;