import matcher from './';

expect.extend(matcher);

describe('.toStartWith', () => {
  it('passes when string starts with given prefix', () => {
    expect('hello world').toStartWith('hello');
  });

  it('fails when the string is shorter than the given prefix', () => {
    expect(() => expect('hello').toStartWith('hello world')).toThrowErrorMatchingSnapshot();
  });

  it('fails when string does not start with the given prefix', () => {
    expect(() => expect('hello world').toStartWith('world')).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toStartWith', () => {
  it('passes when string does not start with the given prefix', () => {
    expect('hello world').not.toStartWith('world');
  });

  it('passes when string is shorter than the given prefix', () => {
    expect('hello').not.toStartWith('hello world');
  });

  it('fails when string starts with given prefix', () => {
    expect(() => expect('hello world').not.toStartWith('hello')).toThrowErrorMatchingSnapshot();
  });
});
