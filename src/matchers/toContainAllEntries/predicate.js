import { equals } from 'expect/build/jasmine_utils';

export default (obj, entries) => {
  if (!obj.hasOwnProperty || entries.length != Object.keys(obj).length) {
    return false;
  }

  return entries.every(([key, value]) => obj.hasOwnProperty(key) && equals(obj[key], value));
};
