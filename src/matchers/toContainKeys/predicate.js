export default (obj, keys) => keys.every(key => obj && obj.hasOwnProperty && obj.hasOwnProperty(key));
