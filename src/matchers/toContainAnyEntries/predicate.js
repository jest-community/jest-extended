import { contains } from '../../utils';

export default (equals, object, entries) => {
  const objectEntries = Object.keys(object).map(k => [k, object[k]]);
  return entries.some(entry => contains(equals, objectEntries, entry));
};
