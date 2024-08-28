import * as matcher from 'src/matchers/toPartiallyContain';

expect.extend(matcher);

describe('.toPartiallyContain', () => {
  const item = { foo: 'bar', baz: 'qux' };

  test('passes when an array contains all of the properties of a given object', () => {
    expect([{ foo: 'bar', baz: 'qux', bax: 'zax' }]).toPartiallyContain(item);
  });

  test('fails when an array does not contain any of the properties of a given object', () => {
    expect(() => expect([{ a: 1, b: 2 }]).toPartiallyContain(item)).toThrowErrorMatchingSnapshot();
  });

  test('fails when an array does not contain any of the properties of a given object', () => {
    expect(() => expect([{ foo: 'bar' }]).toPartiallyContain(item)).toThrowErrorMatchingSnapshot();
  });

  describe('.not.toPartiallyContain', () => {
    test('passes when an array does not contain any of the properties of a given object', () => {
      expect([{ a: 1, b: 2 }]).not.toPartiallyContain(item);
    });

    test('passes when an array does not contain any of the properties of a given object', () => {
      expect([{ foo: 'bar' }]).not.toPartiallyContain(item);
    });

    test('fails when an array contains all of the properties of a given object', () => {
      expect(() =>
        expect([{ foo: 'bar', baz: 'qux', bax: 'zax' }]).not.toPartiallyContain(item),
      ).toThrowErrorMatchingSnapshot();
    });
  });
});
