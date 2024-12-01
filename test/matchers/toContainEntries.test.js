import * as matcher from 'src/matchers/toContainEntries';

expect.extend(matcher);

const data = { a: 'foo', b: 'bar', c: 'baz' };

describe('.toContainEntries', () => {
  test('passes when object contains all of the given entries', () => {
    expect(data).toContainEntries([
      ['c', 'baz'],
      ['a', 'foo'],
    ]);
  });

  test('fails when object does not contain all of the given entries', () => {
    expect(() => expect(data).toContainEntries(['b', 'foo'], ['a', 'foo'])).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toContainEntries', () => {
  test('passes when object does not contain all of the given entries', () => {
    expect(data).not.toContainEntries([['a', 'qux']]);
  });

  test('fails when object contains all of the given entries', () => {
    expect(() =>
      expect(data).not.toContainEntries([
        ['b', 'bar'],
        ['c', 'baz'],
      ]),
    ).toThrowErrorMatchingSnapshot();
  });
});

// Note - custom equality tester must be at the end of the file because once we add it, it cannot be removed
describe('toContainEntries with custom equality tester', () => {
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
    expect(data).toContainEntries([['b', 'bla']]);
  });
  test('fails when custom equality does not match any of the values', () => {
    mockEqualityTester.mockReturnValue(false);
    expect(() => expect(data).toContainEntries([['a', 'foo']])).toThrowErrorMatchingSnapshot();
  });
});
