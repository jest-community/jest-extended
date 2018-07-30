import matcher from './';

expect.extend(matcher);

describe('.toMatchArray', () => {
  test('passes when arrays are empty', () => {
    expect([]).toMatchArray([]);
  });

  test('passes when arrays match', () => {
    expect([1, 2, 3]).toMatchArray([1, 2, 3]);
    expect([{ foo: 'bar' }, { baz: 'qux' }]).toMatchArray([{ foo: 'bar' }, { baz: 'qux' }]);
  });

  test('passes when arrays match in a different order', () => {
    expect([1, 2, 3]).toMatchArray([3, 1, 2]);
    expect([{ foo: 'bar' }, { baz: 'qux' }]).toMatchArray([{ baz: 'qux' }, { foo: 'bar' }]);
  });

  test('fails when the arrays are not equal in length', () => {
    expect(() => expect([1, 2]).toMatchArray([1])).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toMatchArray', () => {
  test('passes when the arrays are different in length', () => {
    expect([1, 2, 3]).not.toMatchArray([1, 2]);
    expect([{ foo: 'bar' }, { baz: 'qux' }]).not.toMatchArray([{ hello: 'world' }]);
  });

  test('passes when given object is not an array', () => {
    expect(4).not.toMatchArray([4, 5, 6]);
  });

  test('passes when arrays do not match', () => {
    expect([]).not.toMatchArray([1]);
    expect([1]).not.toMatchArray([1, 1]);
    expect([1, 2]).not.toMatchArray([1, 2, 2]);
    expect([1, 2, 3]).not.toMatchArray([2, 3, 4]);
  });
});
