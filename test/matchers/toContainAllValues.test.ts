import * as matcher from 'src/matchers/toContainAllValues';

expect.extend(matcher);

const shallow = {
  hello: 'world',
  foo: 0,
  bar: false,
};
const deep = {
  message: shallow,
  donald: 'duck',
};
const deepArray = {
  message: [shallow],
  donald: 'duck',
};

describe('.toContainAllValues', () => {
  test('passes when given object contains primitive values', () => {
    expect(shallow).toContainAllValues(['world', 0, false]);
  });

  test('passes when given object contains all values including objects', () => {
    expect(deep).toContainAllValues([{ hello: 'world', foo: 0, bar: false }, 'duck']);
  });

  test('passes when given object contains all values including arrays', () => {
    expect(deepArray).toContainAllValues(['duck', [{ hello: 'world', foo: 0, bar: false }]]);
  });

  test('fails when given object does not contain all primitive values', () => {
    expect(() => expect(shallow).toContainAllValues(['hello', 0, false])).toThrowErrorMatchingSnapshot();
    expect(() => expect(shallow).toContainAllValues(['world', 0])).toThrowErrorMatchingSnapshot();
  });

  test('fails when given object does not contain all values including objects', () => {
    expect(() => expect(deep).toContainAllValues([{ hello: 'world' }])).toThrowErrorMatchingSnapshot();
  });

  test('fails when given object does not contain all values including arrays', () => {
    expect(() => expect(deepArray).toContainAllValues(['duck', [{ hello: 'world' }]])).toThrowErrorMatchingSnapshot();
  });

  test('fails when actual is not an object', () => {
    expect(() => expect(null).toContainAllValues(['world', 0, false])).toThrowErrorMatchingSnapshot();
    expect(() => expect(42).toContainAllValues(['world', 0, false])).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toContainAllValues', () => {
  test('passes when given object does not contain all primitive values', () => {
    expect(shallow).not.toContainAllValues(['foo', 0]);
  });

  test('passes when given object does not contain all values including objects', () => {
    expect(deep).not.toContainAllValues(['duck', { foo: 'bar' }]);
  });

  test('passes when given object does not contain all values including arrays', () => {
    expect(deepArray).not.toContainAllValues(['duck', [{ foo: 'bar' }]]);
  });

  test('fails when given object contains primitive values', () => {
    expect(() => expect(shallow).not.toContainAllValues(['world', 0, false])).toThrowErrorMatchingSnapshot();
  });

  test('fails when given object contains all values including objects', () => {
    expect(() =>
      expect(deep).not.toContainAllValues([{ hello: 'world', foo: 0, bar: false }, 'duck']),
    ).toThrowErrorMatchingSnapshot();
  });

  test('fails when given object contains all values including arrays', () => {
    expect(() =>
      expect(deepArray).not.toContainAllValues(['duck', [{ hello: 'world', foo: 0, bar: false }]]),
    ).toThrowErrorMatchingSnapshot();
  });

  test('passes when actual is not an object', () => {
    expect(() => expect(null).not.toContainAllValues(['world', 0, false]));
    expect(() => expect(42).not.toContainAllValues(['world', 0, false]));
  });
});

// Note - custom equality tester must be at the end of the file because once we add it, it cannot be removed
describe('toContainAllValues with custom equality tester', () => {
  let mockEqualityTester: jest.Mock;
  beforeAll(() => {
    mockEqualityTester = jest.fn();
    expect.addEqualityTesters([mockEqualityTester]);
  });
  afterEach(() => {
    mockEqualityTester.mockReset();
  });
  test('passes when custom equality matches one of the values', () => {
    mockEqualityTester.mockImplementation((a, b) => (a === 'duck' && b === 'world' ? true : undefined));
    expect(shallow).toContainAllValues(['duck', 0, false]);
  });
  test('fails when custom equality does not match one of the values', () => {
    mockEqualityTester.mockImplementation((a, b) => (a === 'world' && b === 'world' ? false : undefined));
    const values = Object.values(shallow);
    expect(() => expect(shallow).toContainAllValues(values)).toThrowErrorMatchingSnapshot();
  });
});
