import toIncludeAllPartialMembers from '../toIncludeAllPartialMembers/predicate';

export default (equals, array, item) => toIncludeAllPartialMembers(equals, array, [item]);
