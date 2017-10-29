import each from 'jest-each';
import predicate from './predicate';

describe('toBeEmpty', () => {
  it('returns true when given empty', () => {
    expect(predicate('')).toBe(true);
  });

  it('returns true when given an Array is empty', () => {
    expect(predicate([])).toBe(true);
  });

  each([['false'],[['hello','world']], [{ hello: 'world' }], [undefined], [null], [NaN]]).it(
    'returns false when given: %s',
    given => {
      expect(predicate(given)).toBe(false);
    }
  );
});