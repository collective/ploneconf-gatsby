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
            Schedule: <b>lorem</b> ipsum
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
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
