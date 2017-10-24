export default (obj, entries) => !entries.some(([key, value]) => !obj.hasOwnProperty(key) || obj[key] !== value);
