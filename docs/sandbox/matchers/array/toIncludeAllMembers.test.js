/*
#### .toIncludeAllMembers([members])

Use `.toIncludeAllMembers` when checking if an `Array` contains all of the same members of a given set.
*/

test('passes when given array values match the members of the set', () => {
  expect([1, 2, 3]).toIncludeAllMembers([2, 1, 3]);
  expect([1, 2, 2]).toIncludeAllMembers([2, 1]);
});
