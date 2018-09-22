/*
#### .toIncludeMultiple([substring])

Use `.toIncludeMultiple` when checking if a `String` includes all of the given substrings.
*/

test('passes when value includes all substrings', () => {
  expect('hello world').toIncludeMultiple(['world', 'hello']);
  expect('hello world').not.toIncludeMultiple(['world', 'hello', 'bob']);
});
