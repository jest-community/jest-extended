import * as matcher from 'src/matchers/toBeEmpty';

expect.extend(matcher);

describe('.toBeEmpty', () => {
  test('passes when given empty string', () => {
    expect('').toBeEmpty();
  });

  test('passes when given empty string object', () => {
    expect(new String('')).toBeEmpty();
  });

  test('passes when given empty array', () => {
    expect([]).toBeEmpty();
  });

  test('passes when given empty object', () => {
    expect({}).toBeEmpty();
  });

  test('When empty Set is passed', () => {
    expect(new Set()).toBeEmpty();
  });

  test('When empty Map is passed', () => {
    expect(new Map([])).toBeEmpty();
  });

  test('When empty generator is passed', () => {
    function* yieldsNothing() {}

    expect(yieldsNothing()).toBeEmpty();
  });

  test('fails when given non-empty string', () => {
    expect(() => expect('string').toBeEmpty()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeEmpty', () => {
  test('passes when given a non-empty string', () => {
    expect('string').not.toBeEmpty();
  });

  test('passes when given a non-empty string object', () => {
    expect(new String('string')).not.toBeEmpty();
  });

  test('passes when given a non-empty array', () => {
    expect([1, 2]).not.toBeEmpty();
  });

  test('passes when given a non-empty object', () => {
    expect({ foo: 'bar' }).not.toBeEmpty();
  });

  test('When empty Set is passed', () => {
    expect(new Set(['value'])).not.toBeEmpty();
  });

  test('When empty Map is passed', () => {
    expect(new Map([['k', 'v']])).not.toBeEmpty();
  });

  test('When empty generator is passed', () => {
    function* yieldsNothing() {
      yield 'a thing';
    }

    expect(yieldsNothing()).not.toBeEmpty();
  });

  test('fails when given empty string', () => {
    expect(() => expect('').not.toBeEmpty()).toThrowErrorMatchingSnapshot();
  });
});

// Note - custom equality tester must be at the end of the file because once we add it, it cannot be removed
describe('toBeEmpty with custom equality tester', () => {
  let mockEqualityTester;
  beforeAll(() => {
    mockEqualityTester = jest.fn();
    expect.addEqualityTesters([mockEqualityTester]);
  });
  afterEach(() => {
    mockEqualityTester.mockReset();
  });
  test('passes when custom equality matches empty object', () => {
    mockEqualityTester.mockReturnValueOnce(true);
    expect('a').toBeEmpty();
  });
  test('fails when custom equality does not match empty object', () => {
    mockEqualityTester.mockReturnValueOnce(false);
    expect(() => expect({}).toBeEmpty()).toThrowErrorMatchingSnapshot();
  });
});
