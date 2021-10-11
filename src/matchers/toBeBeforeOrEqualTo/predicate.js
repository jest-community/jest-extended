function toBeBeforeOrEqualTo(date, before) {
  return date <= before;
}

export default (date, before) => toBeBeforeOrEqualTo(date, before);
