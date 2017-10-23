import each from 'jest-each';
import predicate from './predicate';

describe('toBeString Predicate', () => {
  it('returns true when given a string', () => {
    expect(predicate('a string')).toBe(true);
  });

  each([[false], [true], [0], [{}], [[]], [() => {}], [undefined], [null], [NaN]]).it(
    'returns false when given: %s',
    given => {
      expect(predicate(given)).toBe(false);
    }
  );
});
