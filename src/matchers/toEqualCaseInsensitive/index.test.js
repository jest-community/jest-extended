import matcher from './';

expect.extend(matcher);

describe('.toEqualCaseInsensitive', () => {
  it('passes if strings are equal despite case', () => {
    expect('a').toEqualCaseInsensitive('A');
    expect('aaAA').toEqualCaseInsensitive('aaaa');
    expect('HELLO WORLD').toEqualCaseInsensitive('hello world');
    expect('hello world').toEqualCaseInsensitive('HELLO WORLD');
    expect(() => expect('aaaa').toEqualCaseInsensitive('bbbb')).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toEqualCaseInsensitive', () => {
  it('fails if strings do not match', () => {
    expect('hello world').not.toEqualCaseInsensitive('hello');
    expect(() => expect('aaaa').not.toEqualCaseInsensitive('aaaa')).toThrowErrorMatchingSnapshot();
  });
});
