/*
#### .toStartWith(prefix)

Use `.toStartWith` when checking if a `String` starts with a given `String` prefix.
*/

test('passes when value is starts with given string', () => {
  expect('hello world').toStartWith('hello');
  expect('hello world').not.toStartWith('world');
});
