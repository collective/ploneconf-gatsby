import React from 'react';
import { string } from 'prop-types';
import CastelloLogoBluSVG from '../svg/CastelloLogoBluSVG';

import './index.scss';

const GetTicketCastle = ({ text }) => (
  <div className="get-ticket-castle">
    <div className="img">
      <CastelloLogoBluSVG />
    </div>

    <h3 dangerouslySetInnerHTML={{ __html: text }} />
    <p>
      <a
        href="https://ploneconference2019.eventbrite.com/?aff=ploneconf"
        className="btn-yellow"
      >
        GET YOUR TICKET NOW!
      </a>
    </p>
  </div>
);

GetTicketCastle.propTypes = {
  text: string,
};

export default GetTicketCastle;
