import each from 'jest-each';
import predicate from './predicate';

describe('toBeNil', () => {
  it('returns true when given empty', () => {
    expect(predicate(undefined)).toBe(true);
  });

  it('returns true when given an Array is empty', () => {
    expect(predicate(null)).toBe(true);
  });

  each([['false'], [['hello', 'world']], [{ hello: 'world' }]]).it('returns false when given: %s', given => {
    expect(predicate(given)).toBe(false);
  });
});
