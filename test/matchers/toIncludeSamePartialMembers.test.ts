import * as matcher from 'src/matchers/toIncludeSamePartialMembers';

expect.extend(matcher);

describe('.toIncludeSamePartialMembers', () => {
  test('passes when array values matches the partial members of the set', () => {
    expect([{ hello: 'world' }, { foo: 'bar', baz: 'qux' }]).toIncludeSamePartialMembers([
      { hello: 'world' },
      { foo: 'bar' },
    ]);
  });

  test('passes when array values matches the partial members of the set in different order', () => {
    expect([{ hello: 'world' }, { foo: 'bar', baz: 'qux' }]).toIncludeSamePartialMembers([
      { foo: 'bar' },
      { hello: 'world' },
    ]);
  });

  test('fails when array values do not contain any of the members of the set', () => {
    expect(() =>
      expect([{ hello: 'world' }, { foo: 'bar', baz: 'qux' }]).toIncludeSamePartialMembers([{ foo: 'qux' }]),
    ).toThrowErrorMatchingSnapshot();
  });

  test('fails when array values contain only some members of the set', () => {
    expect(() =>
      expect([{ hello: 'world' }, { foo: 'bar', baz: 'qux' }]).toIncludeSamePartialMembers([{ hello: 'world' }]),
    ).toThrowErrorMatchingSnapshot();
    expect(() =>
      expect([{ a: 1 }, { b: 2 }, { c: 3 }]).toIncludeSamePartialMembers([{ a: 1 }, { d: 4 }, { b: 2 }]),
    ).toThrowErrorMatchingSnapshot();
  });

  test('fails when given object is not an array', () => {
    expect(() => expect(1).toIncludeSamePartialMembers([{ foo: 'bar' }])).toThrowErrorMatchingSnapshot();
  });

  test('fails when expected object is not an array', () => {
    expect(() =>
      // @ts-expect-error this is intentional for the test
      expect([{ hello: 'world' }, { foo: 'bar', baz: 'qux' }]).toIncludeSamePartialMembers(1),
    ).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toIncludeSamePartialMembers', () => {
  test('passes when array values does not contain any members of the set', () => {
    expect([{ hello: 'world' }, { foo: 'bar', baz: 'qux' }]).not.toIncludeSamePartialMembers([{ foo: 'qux' }]);
  });

  test('passes when array values contain only some of members of the set', () => {
    expect([{ hello: 'world' }, { foo: 'bar', baz: 'qux' }]).not.toIncludeSamePartialMembers([{ hello: 'world' }]);
    expect([{ a: 1 }, { b: 2 }, { c: 3 }]).not.toIncludeSamePartialMembers([{ a: 1 }, { d: 4 }, { b: 2 }]);
  });

  test('passes when given object is not an array', () => {
    expect(1).not.toIncludeSamePartialMembers([{ foo: 'bar' }]);
  });

  test('fails when array values matches the members of the set', () => {
    expect(() =>
      expect([{ hello: 'world' }, { foo: 'bar', baz: 'qux' }]).not.toIncludeSamePartialMembers([
        { hello: 'world' },
        { foo: 'bar' },
      ]),
    ).toThrowErrorMatchingSnapshot();
  });
});
