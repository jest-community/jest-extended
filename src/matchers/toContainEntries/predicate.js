export default (equals, obj, entries) =>
  entries.every(([key, value]) => Object.prototype.hasOwnProperty.call(obj, key) && equals(obj[key], value));
