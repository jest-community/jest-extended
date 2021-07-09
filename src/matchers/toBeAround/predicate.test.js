import predicate from './predicate';

describe('toBeAround Predicate', () => {
  test('returns true when given number is equal to the rounded expected number', () => {
    expect(predicate(0.25001, 0.25, 2)).toBe(true);
  });

  test('returns false when given number is not equal to the rounded expected number', () => {
    expect(predicate(0.26, 0.25, 2)).toBe(false);
  });
});
