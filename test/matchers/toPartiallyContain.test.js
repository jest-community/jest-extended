import * as matcher from 'src/matchers/toPartiallyContain';

expect.extend(matcher);

describe('.toPartiallyContain', () => {
  const item = { foo: 'bar', baz: 'qux' };

  test('passes when an array contains all of the members of a given array', () => {
    expect([{ foo: 'bar', baz: 'qux', bax: 'zax' }]).toPartiallyContain(item);
  });

  test('fails when an array does not contains any of the members of a given array', () => {
    expect(() => expect([{ a: 1, b: 2 }]).toPartiallyContain(item)).toThrowErrorMatchingSnapshot();
  });

  test('fails when an array does not contains all of the members of a given array', () => {
    expect(() => expect([{ foo: 'bar' }]).toPartiallyContain(item)).toThrowErrorMatchingSnapshot();
  });

  describe('.not.toPartiallyContain', () => {
    test('passes when an array does not contains any of the members of a given array', () => {
      expect([{ a: 1, b: 2 }]).not.toPartiallyContain(item);
    });

    test('passes when an array does not contains all of the members of a given array', () => {
      expect([{ foo: 'bar' }]).not.toPartiallyContain(item);
    });

    test('fails when an array contains all of the members of a given array', () => {
      expect(() =>
        expect([{ foo: 'bar', baz: 'qux', bax: 'zax' }]).not.toPartiallyContain(item),
      ).toThrowErrorMatchingSnapshot();
    });
  });
});
