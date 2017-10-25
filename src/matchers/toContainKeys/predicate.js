export default (obj, keys) => keys.every(key => obj.hasOwnProperty && obj.hasOwnProperty(key));
