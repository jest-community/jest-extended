import { contains } from '../../utils';

export default (object, entries) => {
  const objectEntries = Object.keys(object).map(k => [k, object[k]]);
  return entries.some(entry => contains(objectEntries, entry));
};
