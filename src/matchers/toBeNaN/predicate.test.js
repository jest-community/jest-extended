import predicate from './predicate';

describe('toBeNaN Predicate', () => {
  test('returns true when given a non-number', () => {
    expect(predicate({})).toBe(true);
  });

  test.each([[0], [1], [300], [10.5], [-50]])('returns false when given: %s', given => {
    expect(predicate(given)).toBe(false);
  });
});
