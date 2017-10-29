import each from 'jest-each';
import predicate from './predicate';

describe('toBeNil', () => {
  it('returns true when value is undefined', () => {
    expect(predicate(undefined)).toBe(true);
  });

  it('returns true when value is null', () => {
    expect(predicate(null)).toBe(true);
  });

  each([['false'], [['hello', 'world']], [{ hello: 'world' }]]).it('returns false when given: %s', given => {
    expect(predicate(given)).toBe(false);
  });
});
