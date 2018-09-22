/*
#### .toIncludeAnyMembers([members])

Use `.toIncludeAnyMembers` when checking if an `Array` contains any of the members of a given set.
*/

test('passes when given array values match any of the members in the set', () => {
  expect([1, 2, 3]).toIncludeAnyMembers([2, 1, 3]);
  expect([1, 2, 2]).toIncludeAnyMembers([2]);
  expect([1, 2, 2]).not.toIncludeAnyMembers([3]);
});
