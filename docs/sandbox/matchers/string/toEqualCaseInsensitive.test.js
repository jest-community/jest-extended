/*
#### .toEqualCaseInsensitive(string)

Use `.toEqualCaseInsensitive` when checking if a string is equal (===) to another ignoring the casing of both strings.
*/

test('passes when strings are equal ignoring case', () => {
  expect('hello world').toEqualCaseInsensitive('hello world');
  expect('hello WORLD').toEqualCaseInsensitive('HELLO world');
  expect('HELLO WORLD').toEqualCaseInsensitive('hello world');
  expect('hello world').toEqualCaseInsensitive('HELLO WORLD');
  expect('hello world').not.toEqualCaseInsensitive('hello');
});
