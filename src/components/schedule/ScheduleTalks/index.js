import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import moment from 'moment';
import ScheduleTalksList from '../ScheduleTalksList';

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

        const talksDict = talks.reduce((acc, talk, index) => {
          // const date = talk.node.start;
          const date = index % 3 ? moment().add(1, 'd') : moment();
          const time = moment().subtract(index, 'h');
          const day = date.format('DD MMM');
          const room = index % 2 ? 'Room 1' : 'Room 2';

          if (!acc[day]) {
            acc[day] = {};
          }

          if (!acc[day][room]) {
            acc[day][room] = [];
          }

          acc[day][room].push({
            start: time,
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
                Lorem ipsum <span>dolor</span> sit amet.
              </div>
              <div className="talks-container">
                <Tabs forceRenderTabPanel>
                  <TabList>
                    {Object.keys(talksDict).map((day, index) => (
                      <Tab key={day}>
                        <p className="day-index">Day {index + 1}</p>
                        <p className="day-date">{day}</p>
                      </Tab>
                    ))}
                  </TabList>
                  {Object.keys(talksDict).map((day, index) => (
                    <TabPanel key={day}>
                      <Tabs forceRenderTabPanel>
                        <TabList>
                          {Object.keys(talksDict[day])
                            .sort()
                            .map(room => (
                              <Tab key={day + room}>{room}</Tab>
                            ))}
                        </TabList>
                        {Object.keys(talksDict[day])
                          .sort()
                          .map(room => (
                            <TabPanel key={day + room}>
                              <ScheduleTalksList
                                talks={talksDict[day][room]}
                                room={room}
                                dayNumber={index + 1}
                              />
                            </TabPanel>
                          ))}
                      </Tabs>
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
