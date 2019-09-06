import React from 'react';
import { Link } from 'gatsby';
import TalksKeynoters from '../TalksKeynoters';
import TalksList from '../TalksList';
import GetTicketCastle from '../../GetTicketCastle';
import './index.scss';

const TalksHome = ({ data }) => {
  return (
    <React.Fragment>
      <article key={data._id} className="document-content talks-container">
        <div className="schedule-container">
          <div className="container">
            {/* <h2>
                Schedule: <b>lorem</b> ipsum
              </h2> */}
            <p>
              We selected a list of talks and keynotes that make Plone
              Conference a real <span>digital experience</span>.
              <br />
              There will not only be Plone-related talks, but also talks from
              different web-related topics like Volto, Guillotina, Pyramid,
              Javascript, databases and agile.
            </p>
            <TalksKeynoters />
          </div>
          <TalksList />
          <div className="container">
            <div className="link-to-schedule">
              <Link to="/schedule" className="btn-yellow">
                Go to Schedule
              </Link>
            </div>
            <GetTicketCastle text="Interested in this <strong>talks</strong>?" />
          </div>
        </div>
      </article>
    </React.Fragment>
  );
};

export default TalksHome;
