/*
#### .toEndWith(suffix)

Use `.toEndWith` when checking if a `String` ends with a given `String` suffix.
*/

test('passes when value is ends with given string', () => {
  expect('hello world').toEndWith('world');
  expect('hello world').not.toEndWith('hello');
});
