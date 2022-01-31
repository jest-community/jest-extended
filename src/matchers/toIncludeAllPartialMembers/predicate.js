import { containsEntry } from '../../utils';

export default (equals, array, set) =>
  Array.isArray(array) &&
  Array.isArray(set) &&
  set.every(partial =>
    array.some(value => Object.entries(partial).every(entry => containsEntry(equals, value, entry))),
  );
