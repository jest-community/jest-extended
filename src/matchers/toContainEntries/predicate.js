import toContainEntry from '../toContainEntry/predicate';

export default (equals, obj, entries) => entries.every(entry => toContainEntry(equals, obj, entry));
