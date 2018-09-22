/*
#### .toInclude(substring)

Use `.toInclude` when checking if a `String` includes the given `String` substring.
*/

test('passes when value includes substring', () => {
  expect('hello world').toInclude('ell');
  expect('hello world').not.toInclude('bob');
});
