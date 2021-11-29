import toContainEntry from '../toContainEntry/predicate';

export default (obj, entries) => entries.every(entry => toContainEntry(obj, entry));
