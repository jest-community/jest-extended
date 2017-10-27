import each from 'jest-each';
import predicate from './predicate';

describe('toBeFalse Predicate', () => {
  it('returns true when given false', () => {
    expect(predicate(false)).toBe(true);
  });

  each([[true], [''], [0], [{}], [[]], [() => {}], [undefined], [null], [NaN]]).it(
    'returns false when given: %s',
    given => {
      expect(predicate(given)).toBe(false);
    }
  );
});
