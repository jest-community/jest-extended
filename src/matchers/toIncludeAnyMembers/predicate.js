import { contains } from '../../utils';

export default (array, members) => {
  return Array.isArray(array) && Array.isArray(members) && members.some(member => contains(array, member));
};
