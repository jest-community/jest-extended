import * as matcher from 'src/matchers/toContainAnyEntries';

expect.extend(matcher);

const data = { a: 'foo', b: 'bar', c: 'baz' };

describe('.toContainAnyEntries', () => {
  test('passes when given object contains atleast one of the given entries', () => {
    expect(data).toContainAnyEntries([
      ['a', 'qux'],
      ['a', 'foo'],
    ]);
  });

  test('fails when given object does not contain any of the given entries', () => {
    expect(() =>
      expect(data).toContainAnyEntries([
        ['a', 'qux'],
        ['b', 'foo'],
      ]),
    ).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toContainAnyEntries', () => {
  test('passes when given object does not contain any of the given entries', () => {
    expect(data).not.toContainAnyEntries([
      ['a', 'qux'],
      ['b', 'foo'],
    ]);
  });

  test('fails when given object contains atleast one of the given entries', () => {
    expect(() =>
      expect(data).not.toContainAnyEntries([
        ['a', 'qux'],
        ['a', 'foo'],
      ]),
    ).toThrowErrorMatchingSnapshot();
  });
});

// Note - custom equality tester must be at the end of the file because once we add it, it cannot be removed
describe('toContainAnyEntries with custom equality tester', () => {
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
    expect(data).toContainAnyEntries([['b', 'bla']]);
  });
  test('fails when custom equality does not match any of the values', () => {
    mockEqualityTester.mockReturnValue(false);
    expect(() => expect(data).toContainAnyEntries([['a', 'foo']])).toThrowErrorMatchingSnapshot();
  });
});
