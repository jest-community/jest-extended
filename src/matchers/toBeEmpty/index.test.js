import matcher from './';

expect.extend(matcher);

describe('.toBeEmpty', () => {
  it('passes when given empty string', () => {
    expect('').toBeEmpty();
  });

  it('passes when given empty string object', () => {
    expect(new String('')).toBeEmpty();
  });

  it('passes when given empty array', () => {
    expect([]).toBeEmpty();
  });

  it('passes when given empty object', () => {
    expect({}).toBeEmpty();
  });

  it('fails when given non-empty string', () => {
    expect(() => expect('string').toBeEmpty()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeEmpty', () => {
  it('passes when given a non-empty string', () => {
    expect('string').not.toBeEmpty();
  });

  it('passes when given a non-empty string object', () => {
    expect(new String('string')).not.toBeEmpty();
  });

  it('passes when given a non-empty array', () => {
    expect([1, 2]).not.toBeEmpty();
  });

  it('passes when given a non-empty object', () => {
    expect({ foo: 'bar' }).not.toBeEmpty();
  });

  it('fails when given empty string', () => {
    expect(() => expect('').not.toBeEmpty()).toThrowErrorMatchingSnapshot();
  });
});
