import * as matcher from 'src/matchers/toBeOneOf';

expect.extend(matcher);

describe('.toBeOneOf', () => {
  test('passes when value is in given array', () => {
    expect(1).toBeOneOf([1, 2, 3]);
  });

  test('fails when value is not in given array', () => {
    expect(() => expect(4).toBeOneOf([1, 2, 3])).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeOneOf', () => {
  test('passes when value is not in given array', () => {
    expect(4).not.toBeOneOf([1, 2, 3]);
  });

  test('fails when value is in given array', () => {
    expect(() => expect(1).not.toBeOneOf([1, 2, 3])).toThrowErrorMatchingSnapshot();
  });
});

// Note - custom equality tester must be at the end of the file because once we add it, it cannot be removed
describe('toBeOneOf with custom equality tester', () => {
  let mockEqualityTester;
  beforeAll(() => {
    mockEqualityTester = jest.fn();
    expect.addEqualityTesters([mockEqualityTester]);
  });
  afterEach(() => {
    mockEqualityTester.mockReset();
  });
  test('passes when custom equality matches one of array elements', () => {
    mockEqualityTester.mockImplementation(a => a === 3);
    expect('a').toBeOneOf([1, 2, 3]);
  });
  test('fails when custom equality does not match any array element', () => {
    mockEqualityTester.mockReturnValue(false);
    expect(() => expect(1).toBeOneOf([1, 2, 3])).toThrowErrorMatchingSnapshot();
  });
});
