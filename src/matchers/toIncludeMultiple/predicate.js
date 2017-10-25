export default (actual, values) => {
  return values.every(value => actual.includes(value));
};
