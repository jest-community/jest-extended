import each from 'jest-each';
import predicate from './predicate';

describe('toBeArray Predicate', () => {
  it('returns true when given a string', () => {
    expect(predicate(['an array'])).toBe(true);
  });

  each([[false], [''], [0], [{}], [() => {}], [undefined], [null], [NaN]]).it('returns false when given: %s', given => {
    expect(predicate(given)).toBe(false);
  });
});
