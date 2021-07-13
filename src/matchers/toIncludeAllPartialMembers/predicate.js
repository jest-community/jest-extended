import toContainAnyEntries from '../toContainAnyEntries/predicate';

export default (array, set) =>
  Array.isArray(array) &&
  Array.isArray(set) &&
  set.every(partial => array.some(value => toContainAnyEntries(value, Object.entries(partial))));
