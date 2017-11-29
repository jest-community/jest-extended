import each from 'jest-each';
import predicate from './predicate';

describe('toBeNumber Predicate', () => {
  test('returns true when given a number', () => {
    expect(predicate(10)).toBe(true);
  });

  each([[false], [''], [[]], [{}], [() => {}], [undefined], [null], [NaN]]).test(
    'returns false when given: %s',
    given => {
      expect(predicate(given)).toBe(false);
    }
  );
});
