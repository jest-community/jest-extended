import each from 'jest-each';
import predicate from './predicate';

describe('toBeNumber Predicate', () => {
  it('returns true when given a number', () => {
    expect(predicate(10)).toBe(true);
  });

  each([[false], [''], [[]], [{}], [() => {}], [undefined], [null], [NaN]]).it(
    'returns false when given: %s',
    given => {
      expect(predicate(given)).toBe(false);
    }
  );
});
