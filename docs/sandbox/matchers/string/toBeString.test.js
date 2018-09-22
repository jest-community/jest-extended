/*
#### .toBeString()

Use `.toBeString` when checking if a value is a `String`.
*/

test('passes when value is a string', () => {
  expect('').toBeString();
  expect('hello').toBeString();
  expect(new String('hello')).toBeString();
  expect(true).not.toBeString();
});
