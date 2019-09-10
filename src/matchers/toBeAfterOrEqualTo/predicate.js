function toBeAfterOrEqualTo(date, after) {
  return date >= after;
}

export default (date, after) => toBeAfterOrEqualTo(date, after);
