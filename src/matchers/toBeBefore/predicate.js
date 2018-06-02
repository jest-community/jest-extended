function toBeBefore(date, before) {
  return date < before;
}

export default (date, before) => toBeBefore(date, before);
