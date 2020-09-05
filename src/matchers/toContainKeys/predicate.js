export default (obj, keys) => keys.every(key => Object.prototype.hasOwnProperty.call(obj, key));
