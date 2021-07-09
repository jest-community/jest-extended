import each from 'jest-each';
import predicate from './predicate';

describe('toBeTrue Predicate', () => {
  test('returns true when given an array', () => {
    expect(predicate(true)).toBe(true);
  });

  each([[false], [''], [0], [{}], [[]], [() => {}], [undefined], [null], [NaN]]).test(
    'returns false when given: %s',
    given => {
      expect(predicate(given)).toBe(false);
    },
  );
});
