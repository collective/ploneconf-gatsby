import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './index.scss';
import TalksSlider from '../TalksSlider';
import TalkCard from '../TalkCard';

class TalksList extends Component {
  state = {
    showAllTalk: false,
  };

  toggleShowAllTalk = () => {
    if (this.state.showAllTalk) {
      this.setState({
        showAllTalk: false,
      });
    } else {
      this.setState({
        showAllTalk: true,
      });
    }
  };
  render() {
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
              ? allPloneTalk.edges.filter(
                  ({ node }) => node.is_keynote !== true,
                )
              : [];
          const people =
            allPlonePerson.edges && allPlonePerson.edges.length
              ? allPlonePerson.edges
              : [];

          if (talks.length === 0) {
            return '';
          }

          //gets speaker obj
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

          //setting speakers in talks
          talks.forEach(node => {
            let talk = node.node;

            if (talk.related_people) {
              talk.speakers = [];
              talk.related_people.forEach(p => {
                let person = getSpeaker(p._id);
                talk.speakers.push(person);
              });
            }
          });

          //get main talks to display in slider
          const sliderTalks = [];
          sliderTalks.push(talks[0]);
          sliderTalks.push(talks[1]);
          sliderTalks.push(talks[2]);
          sliderTalks.push(talks[3]);

          /****** init slider ******/

          return (
            <React.Fragment>
              <TalksSlider talks={sliderTalks} />
              <div className="container">
                <div className="text-center view-all">
                  <button
                    onClick={this.toggleShowAllTalk}
                    className="btn btn-primary"
                  >
                    {this.state.showAllTalk
                      ? 'Hide talk list'
                      : 'View all talks'}
                  </button>
                </div>

                {this.state.showAllTalk && (
                  <div className="talk-cards">
                    {talks.map(talk => (
                      <TalkCard
                        talk={talk.node}
                        key={talk.node.id + '_talkcard'}
                      />
                    ))}
                  </div>
                )}
              </div>
            </React.Fragment>
          );
        }}
      />
    );
  }
}

TalksList.propTypes = {};

export default TalksList;
