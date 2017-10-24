import matcher from './';

expect.extend(matcher);

describe('.toEndWith', () => {
  it('passes when string ends with given suffix', () => {
    expect('hello world').toEndWith('world');
  });

  it('fails when the string is shorter than the given suffix', () => {
    expect(() => expect('hello').toEndWith('hello world')).toThrowErrorMatchingSnapshot();
  });

  it('fails when string does not end with the given suffix', () => {
    expect(() => expect('hello world').toEndWith('hello')).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toEndWith', () => {
  it('passes when string does not end with the given suffix', () => {
    expect('hello world').not.toEndWith('hello');
  });

  it('passes when string is shorter than the given suffix', () => {
    expect('hello').not.toEndWith('hello world');
  });

  it('fails when string ends with given suffix', () => {
    expect(() => expect('hello world').not.toEndWith('world')).toThrowErrorMatchingSnapshot();
  });
});
