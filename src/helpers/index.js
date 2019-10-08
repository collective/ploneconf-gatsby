import { format, isSameDay } from 'date-fns';
import { formatToTimeZone } from 'date-fns-timezone';

export const whenLabel = ({ start, end, showDay = true }) => {
  if (start.length === 0 && end.length === 0) {
    return '';
  }

  const startDate = new Date(start);
  const endDate = new Date(end);
  const timeZone = 'Europe/Berlin';
  const startTime = formatToTimeZone(startDate, 'HH:mm', { timeZone });
  const endTime = formatToTimeZone(endDate, 'HH:mm', { timeZone });

  if (!showDay) {
    if (end) {
      return `${startTime} - ${endTime}`;
    } else {
      return `from ${startTime}`;
    }
  }

  if (isSameDay(startDate, endDate)) {
    return `${format(startDate, 'dddd')}, ${startTime} - ${endTime}`;
  } else {
    return `${format(startDate, 'dddd')} & ${format(
      endDate,
      'dddd',
    )}, ${startTime} - ${endTime}`;
  }
};
