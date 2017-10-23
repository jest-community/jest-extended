import each from 'jest-each';
import predicate from './predicate';

describe('toBeNaN Predicate', () => {
  it('returns true when given a non-number', () => {
    expect(predicate({})).toBe(true);
  });

  each([[0], [1], [300], [10.5], [-50]]).it('returns false when given: %s', given => {
    expect(predicate(given)).toBe(false);
  });
});
