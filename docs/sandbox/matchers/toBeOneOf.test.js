/*
#### .toBeOneOf([members])

Use `.toBeOneOf` when checking if a value is a member of a given `Array`.
*/

test('passes when value is in given array', () => {
  expect(1).toBeOneOf([1, 2, 3]);
  expect(4).not.toBeOneOf([1, 2, 3]);
});
