/*
#### .toBeExtensible()

Use `.toBeExtensible` when checking if an object is extensible.
*/

test('passes when value is extensible', () => {
  expect({ a: 1 }).toBeExtensible();
  expect(1).not.toBeExtensible();
});
