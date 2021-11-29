import toContainEntries from '../toContainEntries/predicate';

export default (obj, entries) => {
  if (!obj.hasOwnProperty || entries.length != Object.keys(obj).length) {
    return false;
  }

  return toContainEntries(obj, entries);
};
