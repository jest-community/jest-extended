import each from 'jest-each';
import predicate from './predicate';

describe('toBeSymbol Predicate', () => {
  test('returns true when given a symbol', () => {
    expect(predicate(Symbol())).toBe(true);
  });

  each([[false], [''], [0], [{}], [[]], [undefined], [null], [NaN], [() => {}]]).test(
    'returns false when given: %s',
    given => {
      expect(predicate(given)).toBe(false);
    }
  );
});
