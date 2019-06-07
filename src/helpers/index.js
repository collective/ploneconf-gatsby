import { format, isSameDay } from 'date-fns';

export const whenLabel = ({ start, end }) => {
  if (start.length === 0 && end.length === 0) {
    return '';
  }
  const startDate = new Date(start);
  const endDate = new Date(end);
  if (isSameDay(startDate, endDate)) {
    return `${format(startDate, 'dddd')}, ${format(
      startDate,
      'HH:mm',
    )}-${format(endDate, 'HH:mm')}`;
  } else {
    return `${format(startDate, 'dddd')} & ${format(endDate, 'dddd')}, ${format(
      startDate,
      'HH:mm',
    )}-${format(endDate, 'HH:mm')}`;
  }
};
