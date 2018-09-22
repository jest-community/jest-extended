/*
#### .toBeBoolean()

Use `.toBeBoolean` when checking if a value is a `Boolean`.
*/

test('passes when value is a boolean', () => {
  expect(false).toBeBoolean();
  expect(true).toBeBoolean();
  expect(1 === 1).toBeBoolean();
  expect(1).not.toBeBoolean();
});
