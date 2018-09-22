/*
#### .toIncludeRepeated(substring, times)

Use `.toIncludeRepeated` when checking if a `String` includes the given `String` substring the correct number of times.
*/

test('passes when value includes substring n times', () => {
  expect('hello hello world').toIncludeRepeated('hello', 2);
  expect('hello hello world').not.toIncludeRepeated('hello', 1);
});
