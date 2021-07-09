export default (obj, key) => obj.hasOwnProperty && Object.prototype.hasOwnProperty.call(obj, key);
