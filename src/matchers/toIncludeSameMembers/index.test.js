import matcher from './';

expect.extend(matcher);

describe('.toIncludeSameMembers', () => {
  test('passes when arrays are empty', () => {
    expect([]).toIncludeSameMembers([]);
    expect(new Set()).toIncludeSameMembers([]);
  });

  test('passes when arrays match', () => {
    expect([1, 2, 3]).toIncludeSameMembers([1, 2, 3]);
    expect(new Set([1, 2, 3])).toIncludeSameMembers([1, 2, 3]);
    expect([{ foo: 'bar' }, { baz: 'qux' }]).toIncludeSameMembers([{ foo: 'bar' }, { baz: 'qux' }]);
    expect(new Set([{ foo: 'bar' }, { baz: 'qux' }])).toIncludeSameMembers([{ foo: 'bar' }, { baz: 'qux' }]);
  });

  test('passes when arrays match in a different order', () => {
    expect([1, 2, 3]).toIncludeSameMembers([3, 1, 2]);
    expect(new Set([1, 2, 3])).toIncludeSameMembers([3, 1, 2]);
    expect([{ foo: 'bar' }, { baz: 'qux' }]).toIncludeSameMembers([{ baz: 'qux' }, { foo: 'bar' }]);
  });

  test('fails when the iterables are not equal in length', () => {
    expect(() => expect([1, 2]).toIncludeSameMembers([1])).toThrowErrorMatchingSnapshot();
    expect(() => expect(new Set([1, 2])).toIncludeSameMembers([1, 2, 2])).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toIncludeSameMembers', () => {
  test('fails when array contents match', () => {
    expect(() => expect([1]).not.toIncludeSameMembers([1])).toThrowErrorMatchingSnapshot();
    expect(() => expect(new Set([1])).not.toIncludeSameMembers([1])).toThrowErrorMatchingSnapshot();
  });

  test('passes when the arrays are different in length', () => {
    expect([1, 2, 3]).not.toIncludeSameMembers([1, 2]);
    expect(new Set([1, 2])).not.toIncludeSameMembers([1, 2, 3]);
    expect([{ foo: 'bar' }, { baz: 'qux' }]).not.toIncludeSameMembers([{ hello: 'world' }]);
  });

  test('passes when given object is not an iterable', () => {
    expect(4).not.toIncludeSameMembers([4, 5, 6]);
  });

  test('passes when iterables do not match', () => {
    expect([]).not.toIncludeSameMembers([1]);
    expect([1]).not.toIncludeSameMembers([1, 1]);
    expect([1, 2]).not.toIncludeSameMembers([1, 2, 2]);
    expect([1, 2, 3]).not.toIncludeSameMembers([2, 3, 4]);

    expect(new Set([])).not.toIncludeSameMembers([1]);
    expect(new Set([1])).not.toIncludeSameMembers([1, 1]);
    expect(new Set([1, 2])).not.toIncludeSameMembers([1, 2, 2]);
    expect(new Set([1, 2, 3])).not.toIncludeSameMembers([2, 3, 4]);
  });
});
