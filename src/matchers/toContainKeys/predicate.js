export default (obj, keys) =>
  keys.every(key => obj && obj.hasOwnProperty && Object.prototype.hasOwnProperty.call(obj, key));
