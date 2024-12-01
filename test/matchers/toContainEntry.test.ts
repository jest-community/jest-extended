import * as matcher from 'src/matchers/toContainEntry';

expect.extend(matcher);

const data = { a: 'foo', b: 'bar', c: 'baz' };

describe('.toContainEntry', () => {
  test('passes when object contains given entry', () => {
    expect(data).toContainEntry(['a', 'foo']);
    expect(data).toContainEntry(['b', 'bar']);
    expect(data).toContainEntry(['c', 'baz']);
  });

  test('fails when object does not contain given entry', () => {
    expect(() => expect(data).toContainEntry(['b', 'foo'])).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toContainEntry', () => {
  test('passes when object does not contain given entry', () => {
    expect(data).not.toContainEntry(['a', 'qux']);
  });

  test('fails when object contains given entry', () => {
    expect(() => expect(data).not.toContainEntry(['b', 'bar'])).toThrowErrorMatchingSnapshot();
  });
});

// Note - custom equality tester must be at the end of the file because once we add it, it cannot be removed
describe('toContainEntry with custom equality tester', () => {
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
    expect(data).toContainEntry(['b', 'bla']);
  });
  test('fails when custom equality does not match any of the values', () => {
    mockEqualityTester.mockReturnValue(false);
    expect(() => expect(data).toContainEntry(['a', 'foo'])).toThrowErrorMatchingSnapshot();
  });
});
