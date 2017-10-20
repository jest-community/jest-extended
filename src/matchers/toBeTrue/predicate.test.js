import each from 'jest-each';
import predicate from './predicate';

describe('toBeTrue Predicate', () => {
  it('returns true when given true', () => {
    expect(predicate(true)).toBe(true);
  });

  each([[false], [''], [0], [{}], [[]], [() => {}], [undefined], [null], [NaN]]).it(
    'returns false when given: %s',
    given => {
      expect(predicate(given)).toBe(false);
    }
  );
});
