import each from 'jest-each';
import predicate from './predicate';

describe('toBePositive Predicate', () => {
  test('returns true when given a positive number', () => {
    expect(predicate(1)).toBe(true);
  });

  each([
    [false],
    [''],
    [-1],
    [0],
    [{}],
    [[]],
    [() => {}],
    [undefined],
    [null],
    [NaN],
    [Infinity]
  ]).test('returns false when given: %s', given => {
    expect(predicate(given)).toBe(false);
  });
});
