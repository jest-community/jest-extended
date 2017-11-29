import each from 'jest-each';
import predicate from './predicate';

describe('toBeFunction Predicate', () => {
  test('returns true when given a function', () => {
    expect(predicate(() => {})).toBe(true);
  });

  each([[false], [''], [0], [{}], [[]], [undefined], [null], [NaN]]).test('returns false when given: %s', given => {
    expect(predicate(given)).toBe(false);
  });
});
