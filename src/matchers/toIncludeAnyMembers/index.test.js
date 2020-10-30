import matcher from './';

expect.extend(matcher);

describe('.toIncludeAnyMembers', () => {
  const shallow = { hello: 'world' };
  const deep = { message: shallow };

  test('passes when given iterable is a subset', () => {
    expect([2, 3]).toIncludeAnyMembers([1, 2, 3]);
    expect(new Set([2, 3])).toIncludeAnyMembers([1, 2, 3]);
  });

  test('passes when given array contains some of the members', () => {
    expect([1, 2, 3]).toIncludeAnyMembers([2, 3, 4]);
    expect(new Set([1, 2, 3])).toIncludeAnyMembers([2, 3, 4]);
  });

  test('passes when given array contains object value', () => {
    expect([shallow]).toIncludeAnyMembers([shallow, deep]);
    expect(new Set([shallow])).toIncludeAnyMembers([shallow, deep]);
  });

  test('fails when given iterables does not contain any members ', () => {
    expect(() => expect([4, 5, 6]).toIncludeAnyMembers([1, 2, 3])).toThrowErrorMatchingSnapshot();
    expect(() => expect(new Set([4, 5, 6])).toIncludeAnyMembers([1, 2, 3])).toThrowErrorMatchingSnapshot();
  });

  test('fails when given object is not an iterable', () => {
    expect(() => expect(7).toIncludeAnyMembers([1, 2, 3])).toThrowErrorMatchingSnapshot();
  });

  test('fails when expected object does not contain array value', () => {
    expect(() => expect([1, 2, 3]).toIncludeAnyMembers('world')).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toIncludeAnyMembers', () => {
  const shallow = { hello: 'world' };

  test('passes when given array does not contain primitive value', () => {
    expect(['hola', 'mundo']).not.toIncludeAnyMembers(['hello', 'world']);
    expect(new Set(['hola', 'mundo'])).not.toIncludeAnyMembers(['hello', 'world']);
  });

  test('passes when given array does not contain object value', () => {
    expect([{ hello: 'world' }]).not.toIncludeAnyMembers([{ world: 'hello' }]);
    expect(new Set([{ hello: 'world' }])).not.toIncludeAnyMembers([{ world: 'hello' }]);
  });

  test('passes when given object is not array', () => {
    expect(7).not.toIncludeAnyMembers([7]);
  });

  test('fails when given object contains primitive value', () => {
    expect(() => expect([7]).not.toIncludeAnyMembers([7, 8])).toThrowErrorMatchingSnapshot();
    expect(() => expect(new Set([7])).not.toIncludeAnyMembers([7, 8])).toThrowErrorMatchingSnapshot();
  });

  test('fails when given array contains object value', () => {
    expect(() => expect([{ foo: 'bar' }]).not.toIncludeAnyMembers([{ foo: 'bar' }])).toThrowErrorMatchingSnapshot();
    expect(() =>
      expect(new Set([{ foo: 'bar' }])).not.toIncludeAnyMembers([{ foo: 'bar' }])
    ).toThrowErrorMatchingSnapshot();
  });

  test('fails when given array contains array value', () => {
    expect(() => expect([[shallow]]).not.toIncludeAnyMembers([[shallow], 7])).toThrowErrorMatchingSnapshot();
    expect(() => expect(new Set([[shallow]])).not.toIncludeAnyMembers([[shallow], 7])).toThrowErrorMatchingSnapshot();
  });
});
