import React from 'react';
import ScheduleKeynoters from '../ScheduleKeynoters';
import ScheduleTalks from '../ScheduleTalks';
import './index.scss';
import GetTicketCastle from '../../GetTicketCastle';

class ScheduleContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="schedule-container">
        <div className="container">
          <h2>
            Plan of <b>talks</b> and <b>keynotes</b>
          </h2>
          <p>
            This is the plan of talks and keynotes that we have selected to make
            the Plone Conference a real digital experience. There&apos;s not
            only Plone-related talks, but also talks from different web-related
            topic like Volto, Guillotina, Pyramid, Javascript, databases and
            agile.
          </p>

          <p>
            All talks and keynotes will take place between 23rd and 25th October
            2019 at the Apollo Cinepark in the city center of Ferrara.
          </p>
          <ScheduleKeynoters />
        </div>
        <ScheduleTalks />
        <div className="container">
          <GetTicketCastle text="Interested in these <strong>talks</strong>?" />
        </div>
      </div>
    );
  }
}

ScheduleContainer.propTypes = {};

export default ScheduleContainer;
