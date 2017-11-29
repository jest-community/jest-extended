import each from 'jest-each';
import predicate from './predicate';

describe('toBeNaN Predicate', () => {
  test('returns true when given a non-number', () => {
    expect(predicate({})).toBe(true);
  });

  each([[0], [1], [300], [10.5], [-50]]).test('returns false when given: %s', given => {
    expect(predicate(given)).toBe(false);
  });
});
