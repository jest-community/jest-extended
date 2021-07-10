import { equals } from 'expect/build/jasmineUtils';
import predicate from './predicate';

describe('toIncludeSameMembers Predicate', () => {
  test('returns true when arrays are empty', () => {
    expect(predicate(equals, [], [])).toBe(true);
  });

  test('returns true when arrays match with the same order', () => {
    expect(predicate(equals, [1, 2, 3], [1, 2, 3])).toBe(true);
  });

  test('returns true when arrays match with reverse order', () => {
    expect(predicate(equals, [1, 2, 3], [3, 2, 1])).toBe(true);
  });

  test('returns true when arrays match with duplicate elements and same order', () => {
    expect(predicate(equals, [1, 2, 2], [1, 2, 2])).toBe(true);
  });

  test('returns true when arrays match with duplicate elements and reverse order', () => {
    expect(predicate(equals, [1, 2, 2], [2, 2, 1])).toBe(true);
  });

  test('returns false when inputs are not arrays', () => {
    expect(predicate(equals, null, null)).toBe(false);
    expect(predicate(equals, null, [])).toBe(false);
    expect(predicate(equals, [], null)).toBe(false);
  });

  test('returns false when arrays have different lengths', () => {
    expect(predicate(equals, [], [1])).toBe(false);
    expect(predicate(equals, [1], [])).toBe(false);
    expect(predicate(equals, [1, 2, 3], [1, 2])).toBe(false);
  });

  test('returns false when no elements match', () => {
    expect(predicate(equals, [1, 2], [3, 4])).toBe(false);
  });

  test('returns false when only one element matches', () => {
    expect(predicate(equals, [1, 2, 3], [3, 4, 5])).toBe(false);
  });

  test('returns false when all but one element matches', () => {
    expect(predicate(equals, [1, 2, 3], [2, 3, 4])).toBe(false);
  });

  test('does not modify the array content', () => {
    const arr = [1, 2, 3];
    predicate(equals, arr, arr);
    expect(arr).toEqual([1, 2, 3]);
  });
});
