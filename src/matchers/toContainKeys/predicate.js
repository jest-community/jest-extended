export default (obj, keys) => keys.every(key => obj.hasOwnProperty && Object.prototype.hasOwnProperty.call(obj, key));
