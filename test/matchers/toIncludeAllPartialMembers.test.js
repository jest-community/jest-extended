import * as matcher from 'src/matchers/toIncludeAllPartialMembers';

expect.extend(matcher);

describe('.toIncludeAllPartialMembers', () => {
  test('passes when array values matches the partial members of the set', () => {
    expect([{ hello: 'world' }, { foo: 'bar', baz: 'qux' }]).toIncludeAllPartialMembers([{ foo: 'bar' }]);
  });

  test('fails when array values do not contain any of the members of the set', () => {
    expect(() =>
      expect([{ hello: 'world' }, { foo: 'bar', baz: 'qux' }]).toIncludeAllPartialMembers([{ foo: 'qux' }]),
    ).toThrowErrorMatchingSnapshot();
  });

  test('fails when given object is not an array', () => {
    expect(() => expect(1).toIncludeAllPartialMembers([{ foo: 'bar' }])).toThrowErrorMatchingSnapshot();
  });

  test('fails when expected object is not an array', () => {
    expect(() =>
      expect([{ hello: 'world' }, { foo: 'bar', baz: 'qux' }]).toIncludeAllPartialMembers(1),
    ).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toIncludeAllPartialMembers', () => {
  test('passes when array values does not contain any members of the set', () => {
    expect([{ hello: 'world' }, { foo: 'bar', baz: 'qux' }]).not.toIncludeAllPartialMembers([{ foo: 'qux' }]);
  });

  test('passes when given object is not an array', () => {
    expect(1).not.toIncludeAllPartialMembers([{ foo: 'bar' }]);
  });

  test('fails when array values matches the members of the set', () => {
    expect(() =>
      expect([{ hello: 'world' }, { foo: 'bar', baz: 'qux' }]).not.toIncludeAllPartialMembers([{ foo: 'bar' }]),
    ).toThrowErrorMatchingSnapshot();
  });
});

// Note - custom equality tester must be at the end of the file because once we add it, it cannot be removed
describe('toIncludeAllPartialMembers with custom equality tester', () => {
  let mockEqualityTester;
  beforeAll(() => {
    mockEqualityTester = jest.fn();
    expect.addEqualityTesters([mockEqualityTester]);
  });
  afterEach(() => {
    mockEqualityTester.mockReset();
  });
  test('passes when custom equality matches one of the values', () => {
    mockEqualityTester.mockImplementation((a, b) => (a === 'bar' && b === 'bla' ? true : undefined));
    expect([{ foo: 'bar' }]).toIncludeAllPartialMembers([{ foo: 'bla' }]);
  });
  test('fails when custom equality does not match any of the values', () => {
    mockEqualityTester.mockReturnValue(false);
    expect(() => expect([{ foo: 'bar' }]).toIncludeAllPartialMembers([{ foo: 'bar' }])).toThrowErrorMatchingSnapshot();
  });
});
