import React from 'react';

import PartySmileSVG from '../svg/PartySmileSVG';

import './index.scss';

const CTASpeakers = () => (
  <section className="cta-tickets">
    <h2 className="title">
      Get <strong>tickets</strong> now!
    </h2>
    <div className="recommended container">
      <span>Recommended</span>
    </div>
    <div className="tickets">
      <div className="black-block" />
      <div className="blue-block" />
      <div className="container">
        <div className="row">
          {/* FULL CONF TICKET */}
          <div className="ticket fullconf">
            <h3>Full conference pass</h3>
            <p className="ticket-caption">
              Full access to trainings, conference &amp; party
            </p>
            <div className="ticket-features">
              <p>
                Access to <strong>2 day trainings</strong>
              </p>
              <p>Access to 3 days conference</p>
              <p>All coffee breaks</p>
              <p>3 Lunches (Italian specialties!)</p>
              <p>Join the night party</p>
              <p>Join the community sprints</p>
            </div>
            <p className="price">
              <span className="current">
                380 <span className="currency">€</span>
              </span>
            </p>
            <p className="fee-vat">+ Fee &amp; VAT</p>
            <p className="cta-link">
              <a
                href="https://ploneconference2019.eventbrite.com/?aff=ploneconf"
                className="btn-yellow"
              >
                Buy ticket
              </a>
            </p>
          </div>
          {/* ONE DAY TICKET */}
          <div className="ticket oneday">
            <h3>1-day conference pass</h3>
            <p className="ticket-caption">
              Access to one day of the conference
            </p>
            <div className="ticket-features">
              <p>1 Day of conference</p>
              <p>3 Parallel tracks</p>
              <p>2 Coffee breaks</p>
              <p>1 Lunch (Italian specialties!)</p>
            </div>
            <p className="price">
              <span className="current">
                150 <span className="currency">€</span>
              </span>
            </p>
            <p className="fee-vat">+ Fee &amp; VAT</p>
            <p className="cta-link">
              <a
                href="https://ploneconference2019.eventbrite.com/?aff=ploneconf"
                className="btn-yellow"
              >
                Buy ticket
              </a>
            </p>
          </div>
          {/* PARTY TICKET */}
          <div className="ticket party">
            <figure className="">
              <PartySmileSVG />
            </figure>
            <h3>(+1) Party</h3>
            <p className="ticket-caption">
              Get an additional entrance to the Plone Party!
            </p>
            <div className="ticket-features">
              <p>
                Bring a friend/partner at the party and share the medieval and
                renaissance atmosphere that surrounds the Este Castle.
              </p>
            </div>
            <p className="price">
              <span className="current">
                50 <span className="currency">€</span>
              </span>
            </p>
            <p className="fee-vat">+ Fee &amp; VAT</p>
            <p className="cta-link">
              <a
                href="https://ploneconference2019.eventbrite.com/?aff=ploneconf"
                className="btn-yellow"
              >
                Buy ticket
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTASpeakers;
