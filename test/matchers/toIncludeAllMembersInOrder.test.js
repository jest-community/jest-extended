import * as matcher from 'src/matchers/toIncludeAllMembersInOrder';

expect.extend(matcher);

describe('.toIncludeAllMembersInOrder', () => {
  const array1 = [1, 2, 3];
  const array2 = [1, 2, 2];

  test('passes when array values match in order the expected array', () => {
    expect(array1).toIncludeAllMembersInOrder([1, 2, 3]);
    expect([{ foo: 'bar' }, { baz: 'qux' }]).toIncludeAllMembersInOrder([{ foo: 'bar' }, { baz: 'qux' }]);
  });

  test('fails when array values do not have the same order as the expected array', () => {
    expect(() => expect(array1).toIncludeAllMembersInOrder([2, 1, 3])).toThrowErrorMatchingSnapshot();
    expect(() => expect(array2).toIncludeAllMembersInOrder([2, 1])).toThrowErrorMatchingSnapshot();
    expect(() =>
      expect([{ foo: 'bar' }, { baz: 'qux' }]).toIncludeAllMembersInOrder([{ baz: 'qux' }, { foo: 'bar' }]),
    ).toThrowErrorMatchingSnapshot();
  });

  test('fails when array values do not contain all the members of the set', () => {
    expect(() => expect([1, 2, 3]).toIncludeAllMembersInOrder([1, 2])).toThrowErrorMatchingSnapshot();
  });

  test('fails when given object is not an array', () => {
    expect(() => expect(2).toIncludeAllMembersInOrder([1, 2, 3])).toThrowErrorMatchingSnapshot();
  });

  test('fails when expected object is not an array', () => {
    expect(() => expect(array1).toIncludeAllMembersInOrder(2)).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toIncludeAllMembersInOrder', () => {
  const array1 = [1, 2, 3];

  test('passes when array values does not contain any members of the set', () => {
    expect(array1).not.toIncludeAllMembersInOrder([4, 5, 6]);
    expect([{ foo: 'bar' }, { baz: 'qux' }]).not.toIncludeAllMembersInOrder([{ hello: 'world' }]);
  });

  test('passes when given object is not an array', () => {
    expect(4).not.toIncludeAllMembersInOrder([4, 5, 6]);
  });

  test('passes when array values matches the members of the set', () => {
    expect(array1).not.toIncludeAllMembersInOrder([2, 1, 3]);
  });
});
