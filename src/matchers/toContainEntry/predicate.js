export default (obj, [key, value]) => obj.hasOwnProperty && obj.hasOwnProperty(key) && obj[key] === value;
