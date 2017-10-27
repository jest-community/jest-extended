import each from 'jest-each';
import predicate from './predicate';

describe('toBeEven Predicate', () => {
  it('returns true when given an even number', () => {
    expect(predicate(2)).toBe(true);
  });

  it('returns false when given an odd number', () => {
    expect(predicate(1)).toBe(false);
  });

  each([[false], [''], [[]], [{}], [() => {}], [undefined], [null], [NaN]]).it(
    'returns false when given: %s',
    given => {
      expect(predicate(given)).toBe(false);
    }
  );
});
