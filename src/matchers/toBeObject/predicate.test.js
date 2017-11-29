import each from 'jest-each';
import predicate from './predicate';

describe('toBeObject Predicate', () => {
  test('returns true when given an object', () => {
    expect(predicate({})).toBe(true);
  });

  each([[false], [''], [0], [() => {}], [undefined], [NaN]]).test('returns false when given: %s', given => {
    expect(predicate(given)).toBe(false);
  });
});
