import predicate from './predicate';

describe('toBeWithinPercent Predicate', () => {
  test('returns true when given number is within percent of mid', () => {
    expect(predicate(55, 50, 10)).toBe(true);
  });

  test('returns false when given number is not within percent of mid', () => {
    expect(predicate(60, 50, 10)).toBe(false);
  });
});
