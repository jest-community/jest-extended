import * as matcher from 'src/matchers/toContainAnyValues';

expect.extend(matcher);

const data = { a: 'foo', b: 'bar', c: 'baz' };

describe('.toContainAnyValues', () => {
  test('passes when given object contains value', () => {
    expect(data).toContainAnyValues(['foo']);
    expect(data).toContainAnyValues(['foo', 'fax']);
    expect(data).toContainAnyValues(['qux', 'bar']);
    expect(data).toContainAnyValues(['qux', 'baz', 'rod']);
  });

  test('fails when given object does not contain value', () => {
    expect(() => expect(data).toContainAnyValues(['fax'])).toThrowErrorMatchingSnapshot();
    expect(() => expect(data).toContainAnyValues(['fax', 'rom'])).toThrowErrorMatchingSnapshot();
    expect(() => expect(data).toContainAnyValues(['dae', 'mur', 'zoe'])).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toContainAnyValues', () => {
  test('passes when given object does not contain value', () => {
    expect(data).not.toContainAnyValues(['qux']);
    expect(data).not.toContainAnyValues(['bui', 'mur']);
  });

  test('fails when given object contains value', () => {
    expect(() => expect(data).not.toContainAnyValues(['baz'])).toThrowErrorMatchingSnapshot();
    expect(() => expect(data).not.toContainAnyValues(['foo', 'bar'])).toThrowErrorMatchingSnapshot();
  });
});

// Note - custom equality tester must be at the end of the file because once we add it, it cannot be removed
describe('toContainAnyValues with custom equality tester', () => {
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
    expect(data).toContainAnyValues(['bla']);
  });
  test('fails when custom equality does not match any of the values', () => {
    mockEqualityTester.mockReturnValue(false);
    expect(() => expect(data).toContainAnyValues(['bar'])).toThrowErrorMatchingSnapshot();
  });
});
