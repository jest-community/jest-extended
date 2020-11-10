import predicate from './predicate';

describe('toBeWithinPercent Predicate', () => {
  test('returns true when given number is within percent of mid', () => {
    expect(predicate(75, 50, 100)).toBe(true);
  });

  test('returns false when given number is not within percent of mid', () => {
    expect(predicate(70, 50, 10)).toBe(false);
  });
});
