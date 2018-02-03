import each from 'jest-each';
import predicate from './predicate';

describe('toBeArrayOfSize Predicate', () => {
  const size = 5;
  test(`returns true when given an array of size ${size}`, () => {
    expect(predicate([1, 2, 3, 4, 5], size)).toBe(true);
  });

  each([
    [[false], 0],
    [[''], -1],
    [[0], 6],
    [[{}], 6],
    [[() => {}], 6],
    [[undefined], 6],
    [[null], 6],
    [[NaN], 6]
  ]).test('returns false when given: %s', (array, size) => {
    expect(predicate(array, size)).toBe(false);
  });
});
