/*
#### .toIncludeSameMembers([members])

Use `.toIncludeSameMembers` when checking if two arrays contain equal values, in any order.
*/

test('passes when arrays match in a different order', () => {
  expect([1, 2, 3]).toIncludeSameMembers([3, 1, 2]);
  expect([{ foo: 'bar' }, { baz: 'qux' }]).toIncludeSameMembers([{ baz: 'qux' }, { foo: 'bar' }]);
});
