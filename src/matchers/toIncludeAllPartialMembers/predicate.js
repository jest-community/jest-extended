import toContainEntries from '../toContainEntries/predicate';

export default (equals, array, set) =>
  Array.isArray(array) &&
  Array.isArray(set) &&
  set.every(partial => array.some(value => toContainEntries(equals, value, Object.entries(partial))));
