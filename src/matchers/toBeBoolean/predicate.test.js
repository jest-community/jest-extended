import each from 'jest-each';
import predicate from './predicate';

describe('toBeBoolean', () => {
  test('returns true when given a boolean', () => {
    expect(predicate(false)).toBe(true);
  });

  test('returns true when given an object of type Boolean', () => {
    expect(predicate(new Boolean(false))).toBe(true);
  });

  each([['false'], [0], [{}], [[]], [() => {}], [undefined], [null], [NaN]]).test(
    'returns false when given: %s',
    given => {
      expect(predicate(given)).toBe(false);
    }
  );
});
