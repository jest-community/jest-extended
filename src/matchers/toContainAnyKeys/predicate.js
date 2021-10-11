export default (actual, values) => values.some(value => Object.prototype.hasOwnProperty.call(actual, value));
