import matcher from './';

expect.extend(matcher);

describe('.toIncludeMultiple', () => {
  it('passes when string includes all substrings', () => {
    expect('hello world').toIncludeMultiple(['world', 'hello']);
  });

  it('fails when string does not include all substrings', () => {
    expect(() => expect('hello world').toIncludeMultiple(['hello', 'world', 'bob'])).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toIncludeMultiple', () => {
  it('passes when string does not include all substrings', () => {
    expect('hello world').not.toIncludeMultiple(['world', 'hello', 'bob']);
  });

  it('fails when string includes all substrings', () => {
    expect(() => expect('hello world').not.toIncludeMultiple(['hello', 'world'])).toThrowErrorMatchingSnapshot();
  });
});
