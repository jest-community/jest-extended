/*
#### .toBeArray()

Use `.toBeArray` when checking if a value is an `Array`.
*/

test('passes when value is an array', () => {
  expect([]).toBeArray();
  expect([1]).toBeArray();
  expect(true).not.toBeArray();
});
