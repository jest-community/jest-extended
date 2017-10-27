import each from 'jest-each';
import predicate from './predicate';

describe('toBeObject Predicate', () => {
  it('returns true when given an object', () => {
    expect(predicate({})).toBe(true);
  });

  each([[false], [''], [0], [() => {}], [undefined], [NaN]]).it('returns false when given: %s', given => {
    expect(predicate(given)).toBe(false);
  });
});
