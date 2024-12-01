import * as matcher from 'src/matchers/toContainAllEntries';

expect.extend(matcher);

const data = { a: 'foo', b: 'bar', c: 'baz' };

describe('.toContainAllEntries', () => {
  test('passes when object only contains all of the given entries', () => {
    expect(data).toContainAllEntries([
      ['a', 'foo'],
      ['b', 'bar'],
      ['c', 'baz'],
    ]);
  });

  test('fails when object does not only contain all of the given entries', () => {
    expect(() =>
      expect(data).toContainAllEntries([
        ['a', 'foo'],
        ['b', 'bar'],
      ]),
    ).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toContainAllEntries', () => {
  test('passes when object does not only contain all of the given entries', () => {
    expect(data).not.toContainAllEntries([
      ['a', 'qux'],
      ['b', 'bar'],
      ['c', 'baz'],
    ]);
  });

  test('fails when object only contains all of the given entries', () => {
    expect(() =>
      expect(data).not.toContainAllEntries([
        ['b', 'bar'],
        ['a', 'foo'],
        ['c', 'baz'],
      ]),
    ).toThrowErrorMatchingSnapshot();
  });
});

// Note - custom equality tester must be at the end of the file because once we add it, it cannot be removed
describe('toContainAllEntries with custom equality tester', () => {
  let mockEqualityTester;
  beforeAll(() => {
    mockEqualityTester = jest.fn();
    expect.addEqualityTesters([mockEqualityTester]);
  });
  afterEach(() => {
    mockEqualityTester.mockReset();
  });
  test('passes when custom equality matches one of the values', () => {
    mockEqualityTester.mockImplementation((a, b) => (a === 'baz' && b === 'bla' ? true : undefined));
    expect(data).toContainAllEntries([
      ['b', 'bar'],
      ['a', 'foo'],
      ['c', 'bla'],
    ]);
  });
  test('fails when custom equality returns false on one of the values', () => {
    mockEqualityTester.mockImplementation((a, b) => (a === 'baz' && b === 'baz' ? false : undefined));
    const entries = Object.entries(data);
    expect(() => expect(data).toContainAllEntries(entries)).toThrowErrorMatchingSnapshot();
  });
});
