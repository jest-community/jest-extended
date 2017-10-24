export default (obj, entries) => {
  if (!obj.hasOwnProperty || entries.length != Object.keys(obj).length) {
    return false;
  }

  return !entries.some(([key, value]) => !obj.hasOwnProperty(key) || obj[key] !== value);
};
