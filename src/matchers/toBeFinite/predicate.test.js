import predicate from './predicate';

describe('toBeFinite Predicate', () => {
  test('returns true when given a finite number', () => {
    expect(predicate(1)).toBe(true);
  });

  test('return false when given infinity', () => {
    expect(predicate(Infinity)).toBe(false);
  });

  test('return false when given NaN', () => {
    expect(predicate(NaN)).toBe(false);
  });
});
