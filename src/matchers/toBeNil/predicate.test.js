import each from 'jest-each';
import predicate from './predicate';

describe('toBeNil', () => {
  test('returns true when value is undefined', () => {
    expect(predicate(undefined)).toBe(true);
  });

  test('returns true when value is null', () => {
    expect(predicate(null)).toBe(true);
  });

  each([['false'], [['hello', 'world']], [{ hello: 'world' }]]).test('returns false when given: %s', given => {
    expect(predicate(given)).toBe(false);
  });
});
