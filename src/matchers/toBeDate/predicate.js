function is(type) {
  return value => Object.prototype.toString.call(value) === `[object ${type}]`;
}

let hasDateType = is('Date');

function isDate(value) {
  return hasDateType(value) && !isNaN(value);
}

export default expected => isDate(expected);
