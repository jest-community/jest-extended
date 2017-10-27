import each from 'jest-each';
import predicate from './predicate';

describe('toBeFunction Predicate', () => {
  it('returns true when given a function', () => {
    expect(predicate(() => {})).toBe(true);
  });

  each([[false], [''], [0], [{}], [[]], [undefined], [null], [NaN]]).it('returns false when given: %s', given => {
    expect(predicate(given)).toBe(false);
  });
});
