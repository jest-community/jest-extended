import * as matcher from 'src/matchers/toIncludeCaseInsensitive';

expect.extend(matcher);

describe('.toIncludeCaseInsensitive', () => {
  test('passes if string is included despite case', () => {
    expect('a').toIncludeCaseInsensitive('A');
    expect('aAA').toIncludeCaseInsensitive('aa');
    expect('hello world').toIncludeCaseInsensitive('ell');
    expect('HELLO world').toIncludeCaseInsensitive('ell');
    expect('hello WORLD').toIncludeCaseInsensitive('ELL');
    expect('HELLO WORLD').toIncludeCaseInsensitive('ELL');
    expect(() => expect('aaaa').toIncludeCaseInsensitive('bbbb')).toThrowErrorMatchingSnapshot();
  });

  test('fails if string is not included despite case', () => {
    expect(() => expect('aaaa').toIncludeCaseInsensitive('bbbb')).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toIncludeCaseInsensitive', () => {
  test('passes when a string does not have a given substring', () => {
    expect('hello world').not.toIncludeCaseInsensitive('bob');
  });

  test('fails when a string does have a given substring', () => {
    expect(() => expect('hello world').not.toIncludeCaseInsensitive('ell')).toThrowErrorMatchingSnapshot();
  });
});
