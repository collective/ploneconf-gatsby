import React from 'react';

import './index.scss';

const CTASpeakers = () => (
  <section className="cta-tickets">
    <h2 className="title">
      Get <strong>tickets</strong> now!
    </h2>
    <div className="recommended container">
      <span>Recommended</span>
    </div>
    <div className="container">
      <div className="row">
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
          <p className="early-bird">Early bird</p>
          <p className="price">
            <span className="full" title="Full price">
              420 <span className="currency">€</span>
            </span>
            <span className="current" title="Discounted price">
              350 <span className="currency">€</span>
            </span>
          </p>
          <p className="fee-vat">+ Fee &amp; VAT</p>
          <p className="cta-link">
            <a href="https://www.eventbrite.com/e/plone-conference-2019-tickets-61498022240?aff=ploneconf">
              Buy ticket
            </a>
          </p>
        </div>
        <div className="ticket oneday">
          <h3>1-day conference pass</h3>
          <p className="ticket-caption">Access to one day of the conference</p>
          <div className="ticket-features">
            <p>1 day of conference</p>
            <p>2 Coffee breaks</p>
            <p>1 Lunch (Italian specialties!)</p>
            <p>Lorem ipsum dolor</p>
          </div>
          <p className="price">
            <span className="current">
              150 <span className="currency">€</span>
            </span>
          </p>
          <p className="fee-vat">+ Fee &amp; VAT</p>
          <p className="cta-link">
            <a href="https://www.eventbrite.com/e/plone-conference-2019-tickets-61498022240?aff=ploneconf">
              Buy ticket
            </a>
          </p>
        </div>
        <div className="ticket party">
          <h3>(+1) Party</h3>
          <p className="ticket-caption">Lorem ipsum dolor</p>
          <div className="ticket-features">
            Donec id elit non mi porta gravida at eget metus.{' '}
            <strong>Etiam porta sem malesuada</strong> magna mollis euismod.
          </div>
          <p className="price">
            <span className="current">
              65 <span className="currency">€</span>
            </span>
          </p>
          <p className="fee-vat">+ Fee &amp; VAT</p>
          <p className="cta-link">
            <a href="https://www.eventbrite.com/e/plone-conference-2019-tickets-61498022240?aff=ploneconf">
              Buy ticket
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default CTASpeakers;
