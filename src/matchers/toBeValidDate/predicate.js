let is = type => value => Object.prototype.toString.call(value) === `[object ${type}]`;

let hasDateType = is('Date');

let isValidDate = value => hasDateType(value) && !isNaN(value) && !isNaN(value.getTime());

export default expected => isValidDate(expected);
