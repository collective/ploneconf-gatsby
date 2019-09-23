import React from 'react';
import { string } from 'prop-types';
import { format, isSameDay } from 'date-fns';
import { formatToTimeZone } from 'date-fns-timezone';
import './index.scss';

const DetailsDate = ({ start, end }) => {
  if (!(start || end)) {
    return '';
  }
  const startDate = new Date(start);
  const endDate = new Date(end);
  const timeZone = 'Europe/Berlin';
  const startTime = formatToTimeZone(startDate, 'HH:mm', { timeZone });
  const endTime = formatToTimeZone(endDate, 'HH:mm', { timeZone });

  let dateComponent = '';
  if (isSameDay(startDate, endDate)) {
    dateComponent = (
      <div className="date-wrapper">
        <div className="month">{format(startDate, 'MMM')}</div>
        <div className="day-hour">
          <span>{format(startDate, 'DD')}</span> {startTime} - {endTime}
        </div>
      </div>
    );
  } else {
    dateComponent = (
      <React.Fragment>
        <div className="date-wrapper">
          <div className="month">{format(startDate, 'MMM')}</div>
          <div className="day-hour">
            <span>{format(startDate, 'DD')}</span> {startTime} - {endTime}
          </div>
        </div>
        <div className="date-wrapper">
          <div className="month">{format(endDate, 'MMM')}</div>
          <div className="day-hour">
            <span>{format(endDate, 'DD')}</span> {startTime} -{endTime}
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
