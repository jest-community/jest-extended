import matcher from './';

expect.extend(matcher);

test('passes when value includes all substrings', () => {
  expect('hello world').toIncludeMultiple(['world', 'hello']);
  expect('hello world').not.toIncludeMultiple(['world', 'hello', 'bob']);
});
