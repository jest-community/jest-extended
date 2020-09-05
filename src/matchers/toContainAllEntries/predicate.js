import { equals } from '../../utils';

export default (obj, entries) => {
  if (entries.length != Object.keys(obj).length) {
    return false;
  }

  return entries.every(([key, value]) => Object.prototype.hasOwnProperty.call(obj, key) && equals(obj[key], value));
};
