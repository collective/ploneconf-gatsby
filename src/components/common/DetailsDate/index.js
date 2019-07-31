import React from 'react';
import { string } from 'prop-types';
import { format, isSameDay } from 'date-fns';
import './index.scss';

const DetailsDate = ({ start, end }) => {
  if (!(start || end)) {
    return '';
  }
  const startDate = new Date(start);
  const endDate = new Date(end);

  let dateComponent = '';
  if (isSameDay(startDate, endDate)) {
    dateComponent = (
      <div className="date-wrapper">
        <div className="month">{format(startDate, 'MMM')}</div>
        <div className="day-hour">
          <span>{format(startDate, 'DD')}</span> {format(startDate, 'HH:mm')} -{' '}
          {format(endDate, 'HH:mm')}
        </div>
      </div>
    );
  } else {
    dateComponent = (
      <React.Fragment>
        <div className="date-wrapper">
          <div className="month">{format(startDate, 'MMM')}</div>
          <div className="day-hour">
            <span>{format(startDate, 'DD')}</span> {format(startDate, 'HH:mm')}{' '}
            - {format(endDate, 'HH:mm')}
          </div>
        </div>
        <div className="date-wrapper">
          <div className="month">{format(endDate, 'MMM')}</div>
          <div className="day-hour">
            <span>{format(endDate, 'DD')}</span> {format(startDate, 'HH:mm')} -
            {format(endDate, 'HH:mm')}
          </div>
        </div>
      </React.Fragment>
    );
  }

  return <div className="details-date">{dateComponent}</div>;
};

DetailsDate.propTypes = {
  start: string,
  end: string,
};

export default DetailsDate;
