import * as matcher from 'src/matchers/toContainAllKeys';

expect.extend(matcher);

const data = { a: 'hello', b: 'world' };

describe('.toContainAllKeys', () => {
  test('passes when given object contains all keys', () => {
    expect(data).toContainAllKeys(['a', 'b']);
  });

  test('fails when given object does not contain all keys', () => {
    expect(() => expect(data).toContainAllKeys(['a'])).toThrowErrorMatchingSnapshot();
  });

  test('fails when given an empty object', () => {
    expect(() => expect({}).toContainAllKeys(['a'])).toThrowErrorMatchingSnapshot();
  });

  test('fails when all of the object keys are matched, but there are additional keys ', () => {
    expect(() => expect(data).toContainAllKeys(['a', 'c'])).toThrowErrorMatchingSnapshot();
  });

  test('fails when actual is not an object', () => {
    expect(() => expect(null).toContainAllKeys(['a', 'b'])).toThrowErrorMatchingSnapshot();
    expect(() => expect(42).toContainAllKeys(['a', 'b'])).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toContainAllKeys', () => {
  test('passes when given object does not contain key', () => {
    expect(data).not.toContainAllKeys(['a']);
  });

  test('fails when given object contains all keys', () => {
    expect(() => expect(data).not.toContainAllKeys(['b', 'a'])).toThrowErrorMatchingSnapshot();
  });

  test('passes when actual is not an object', () => {
    expect(() => expect(null).not.toContainAllKeys(['a', 'b']));
    expect(() => expect(42).not.toContainAllKeys(['a', 'b']));
  });
});

// Note - custom equality tester must be at the end of the file because once we add it, it cannot be removed
(expect.addEqualityTesters ? describe : describe.skip)('toContainAllKeys with custom equality tester', () => {
  let mockEqualityTester: jest.Mock;
  beforeAll(() => {
    mockEqualityTester = jest.fn();
    expect.addEqualityTesters([mockEqualityTester]);
  });
  afterEach(() => {
    mockEqualityTester.mockReset();
  });
  test('passes when custom equality matches one of the keys', () => {
    mockEqualityTester.mockImplementation((a, b) => (a === 'a' && b === 'x' ? true : undefined));
    expect(data).toContainAllKeys(['x', 'b']);
  });
  test('fails when custom equality does not match one of the keys', () => {
    mockEqualityTester.mockImplementation((a, b) => (a === 'a' && b === 'a' ? false : undefined));
    const keys = Object.keys(data);
    expect(() => expect(data).toContainAllKeys(keys)).toThrowErrorMatchingSnapshot();
  });
});
