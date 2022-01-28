export default (equals, obj, [key, value]) =>
  obj.hasOwnProperty && Object.prototype.hasOwnProperty.call(obj, key) && equals(obj[key], value);
