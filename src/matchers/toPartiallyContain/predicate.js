import { containsEntry } from '../../utils';

export default (equals, array, item) =>
  Array.isArray(array) &&
  Array.isArray([item]) &&
  [item].every(partial =>
    array.some(value => Object.entries(partial).every(entry => containsEntry(equals, value, entry))),
  );
