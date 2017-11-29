import matcher from './';

expect.extend(matcher);

describe('.toBeEmpty', () => {
  test('passes when given empty string', () => {
    expect('').toBeEmpty();
  });

  test('passes when given empty string object', () => {
    expect(new String('')).toBeEmpty();
  });

  test('passes when given empty array', () => {
    expect([]).toBeEmpty();
  });

  test('passes when given empty object', () => {
    expect({}).toBeEmpty();
  });

  test('fails when given non-empty string', () => {
    expect(() => expect('string').toBeEmpty()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeEmpty', () => {
  test('passes when given a non-empty string', () => {
    expect('string').not.toBeEmpty();
  });

  test('passes when given a non-empty string object', () => {
    expect(new String('string')).not.toBeEmpty();
  });

  test('passes when given a non-empty array', () => {
    expect([1, 2]).not.toBeEmpty();
  });

  test('passes when given a non-empty object', () => {
    expect({ foo: 'bar' }).not.toBeEmpty();
  });

  test('fails when given empty string', () => {
    expect(() => expect('').not.toBeEmpty()).toThrowErrorMatchingSnapshot();
  });
});
