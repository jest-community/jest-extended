import each from 'jest-each';
import predicate from './predicate';

describe('toBeDate Predicate', () => {
  test('returns true when given a date', () => {
    expect(predicate(new Date('12/25/2017'))).toBe(true);
  });

  each([[true], [false], [''], [0], [{}], [() => {}], [undefined], [null], [NaN]]).test(
    'returns false when given: %s',
    given => {
      expect(predicate(given)).toBe(false);
    },
  );
});
