import toContainEntries from '../toContainEntries/predicate';

export default (equals, obj, entries) => {
  if (!obj.hasOwnProperty || entries.length != Object.keys(obj).length) {
    return false;
  }

  return toContainEntries(equals, obj, entries);
};
