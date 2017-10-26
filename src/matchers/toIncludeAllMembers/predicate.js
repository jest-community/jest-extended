import { contains } from '../../utils';

export default (array, set) => {
  return Array.isArray(array) && Array.isArray(set) && set.every(val => contains(array, val));
};
