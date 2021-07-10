import { contains } from '../../utils';

export default (equals, array, set) => {
  return Array.isArray(array) && Array.isArray(set) && set.every(val => contains(equals, array, val));
};
