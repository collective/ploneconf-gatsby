import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import moment from 'moment';
import ScheduleTalksList from '../ScheduleTalksList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import 'react-tabs/style/react-tabs.css';
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
          if (ret == null) {
            console.log('speaker with id ' + id + ' not found. Is it private?');
          }
          return ret;
        };

        if (talks.length === 0) {
          return '';
        }

        talks.forEach(node => {
          let talk = node.node;

          if (talk.related_people) {
            talk.speakers = talk.related_people.map(person =>
              getSpeaker(person._id),
            );
            talk.speaker = talk.speakers[0];
          } else {
            talk.speakers = null;
            talk.speaker = null;
          }
        });

        const talksDict = talks.reduce((acc, talk) => {
          // const date = talk.node.start;
          //console.log(talk);

          const date = moment(talk.node.start);
          const start = moment(talk.node.start);
          const end = moment(talk.node.end);
          const day = date.format('DD MMM');

          if (!acc[day]) {
            acc[day] = [];
          }

          acc[day].push({
            start: start,
            end: end,
            node: talk.node,
          });

          return acc;
        }, {});

        return (
          <div className="schedule-talks">
            <hr />
            <div className="container">
              <h3>Talks</h3>
              <div className="subtitle">
                All talks will be hosted in <span>Apollo Cinepark</span> rooms,
                in the city center of Ferrara.
                <div className="address">
                  <a
                    href="https://goo.gl/maps/nL3fnxrndAAukAew5"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faMapMarkerAlt} size="3x" />
                    <br />
                    <strong>Apollo Cinepark </strong>
                    <br />
                    Via Carbone 35 <br />
                    44124 - Ferrara
                  </a>
                </div>
              </div>
              <div className="talks-container">
                <Tabs forceRenderTabPanel>
                  <TabList>
                    {Object.keys(talksDict)
                      .sort()
                      .map((day, index) => (
                        <Tab key={day}>
                          <p className="day-index">Day {index + 1}</p>
                          <p className="day-date">{day}</p>
                        </Tab>
                      ))}
                  </TabList>
                  {Object.keys(talksDict)
                    .sort()
                    .map((day, dayIndex) => (
                      <TabPanel key={day}>
                        <ScheduleTalksList
                          key={day + 'talklist'}
                          talks={talksDict[day]}
                          dayNumber={dayIndex + 1}
                        />
                      </TabPanel>
                    ))}
                </Tabs>
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
