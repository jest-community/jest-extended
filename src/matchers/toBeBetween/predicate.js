function toBeBetween(date, startDate, endDate) {
  return date >= startDate && date <= endDate;
}

export default (date, startDate, endDate) => toBeBetween(date, startDate, endDate);
