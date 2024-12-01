import * as matcher from 'src/matchers/toContainValues';

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

describe('.toContainValues', () => {
  test('passes when given object contains primitive values', () => {
    expect(shallow).toContainValues(['world', false]);
  });

  test('passes when given object contains all values including objects', () => {
    expect(deep).toContainValues([{ hello: 'world', foo: 0, bar: false }, 'duck']);
  });

  test('passes when given object contains all values including arrays', () => {
    expect(deepArray).toContainValues(['duck', [{ hello: 'world', foo: 0, bar: false }]]);
  });

  test('fails when given object does not contain all primitive values', () => {
    expect(() => expect(shallow).toContainValues(['hello', 0, false])).toThrowErrorMatchingSnapshot();
  });

  test('fails when given object does not contain all values including objects', () => {
    expect(() => expect(deep).toContainValues([{ hello: 'world' }])).toThrowErrorMatchingSnapshot();
  });

  test('fails when given object does not contain all values including arrays', () => {
    expect(() => expect(deepArray).toContainValues(['duck', [{ hello: 'world' }]])).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toContainValues', () => {
  test('passes when given object does not contain all primitive values', () => {
    expect(shallow).not.toContainValues(['foo', 0]);
  });

  test('passes when given object does not contain all values including objects', () => {
    expect(deep).not.toContainValues(['duck', { foo: 'bar' }]);
  });

  test('passes when given object does not contain all values including arrays', () => {
    expect(deepArray).not.toContainValues(['duck', [{ foo: 'bar' }]]);
  });

  test('fails when given object contains primitive values', () => {
    expect(() => expect(shallow).not.toContainValues(['world', false])).toThrowErrorMatchingSnapshot();
  });

  test('fails when given object contains all values including objects', () => {
    expect(() =>
      expect(deep).not.toContainValues([{ hello: 'world', foo: 0, bar: false }, 'duck']),
    ).toThrowErrorMatchingSnapshot();
  });

  test('fails when given object contains all values including arrays', () => {
    expect(() =>
      expect(deepArray).not.toContainValues(['duck', [{ hello: 'world', foo: 0, bar: false }]]),
    ).toThrowErrorMatchingSnapshot();
  });
});

// Note - custom equality tester must be at the end of the file because once we add it, it cannot be removed
describe('toContainValues with custom equality tester', () => {
  let mockEqualityTester;
  beforeAll(() => {
    mockEqualityTester = jest.fn();
    expect.addEqualityTesters([mockEqualityTester]);
  });
  afterEach(() => {
    mockEqualityTester.mockReset();
  });
  test('passes when custom equality matches one of the values', () => {
    mockEqualityTester.mockImplementation((a, b) => (a === 'world' && b === 'bla' ? true : undefined));
    expect(shallow).toContainValues(['bla']);
  });
  test('fails when custom equality does not match any of the values', () => {
    mockEqualityTester.mockReturnValue(false);
    expect(() => expect(shallow).toContainValues(['world'])).toThrowErrorMatchingSnapshot();
  });
});
