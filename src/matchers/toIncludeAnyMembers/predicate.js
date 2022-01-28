import { contains } from '../../utils';

export default (equals, array, members) => {
  return Array.isArray(array) && Array.isArray(members) && members.some(member => contains(equals, array, member));
};
