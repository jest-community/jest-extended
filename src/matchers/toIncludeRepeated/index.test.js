import matcher from './';

expect.extend(matcher);

describe('.toIncludeRepeated', () => {
  it('passes when string includes substring equal times', () => {
    expect('hello hello world').toIncludeRepeated('hello', 2);
  });

  it('fails when string includes substring less times', () => {
    expect(() => expect('hello world').toIncludeRepeated('hello', 2)).toThrowErrorMatchingSnapshot();
  });

  it('fails when string includes substring more times', () => {
    expect(() => expect('hello hello hello world').toIncludeRepeated('hello', 2)).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toIncludeRepeated', () => {
  it('passes when string includes substring less times', () => {
    expect('hello world').not.toIncludeRepeated('hello', 2);
  });

  it('passes when string includes substring more times', () => {
    expect('hello hello hello world').not.toIncludeRepeated('hello', 2);
  });

  it('fails when string includes substring equal times', () => {
    expect(() => expect('hello hello world').not.toIncludeRepeated('hello', 2)).toThrowErrorMatchingSnapshot();
  });
});
