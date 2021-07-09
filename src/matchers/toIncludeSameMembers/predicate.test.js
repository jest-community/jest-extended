import predicate from './predicate';

describe('toIncludeSameMembers Predicate', () => {
  test('returns true when iterables  are empty', () => {
    expect(predicate([], [])).toBe(true);
    expect(predicate(new Set(), [])).toBe(true);
    expect(predicate([], new Set())).toBe(true);
  });

  test('returns true when arrays match with the same order', () => {
    expect(predicate([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(predicate(new Set([1, 2, 3]), [1, 2, 3])).toBe(true);
  });

  test('returns true when arrays match with reverse order', () => {
    expect(predicate([1, 2, 3], [3, 2, 1])).toBe(true);
    expect(predicate(new Set([1, 2, 3]), [3, 2, 1])).toBe(true);
  });

  test('returns true when arrays match with duplicate elements and same order', () => {
    expect(predicate([1, 2, 2], [1, 2, 2])).toBe(true);
  });

  test('returns true when arrays match with duplicate elements and reverse order', () => {
    expect(predicate([1, 2, 2], [2, 2, 1])).toBe(true);
  });

  test('returns false when inputs are not iterables', () => {
    expect(predicate(null, null)).toBe(false);
    expect(predicate(null, [])).toBe(false);
    expect(predicate([], null)).toBe(false);
  });

  test('returns false when arrays have different lengths', () => {
    expect(predicate([], [1])).toBe(false);
    expect(predicate([1], [])).toBe(false);
    expect(predicate([1, 2, 3], [1, 2])).toBe(false);
    expect(predicate(new Set([1, 2]), [1, 2, 2])).toBe(false);
  });

  test('returns false when no elements match', () => {
    expect(predicate([1, 2], [3, 4])).toBe(false);
    expect(predicate(new Set([1, 2]), [3, 4])).toBe(false);
  });

  test('returns false when only one element matches', () => {
    expect(predicate([1, 2, 3], [3, 4, 5])).toBe(false);
    expect(predicate(new Set([1, 2, 3]), [3, 4, 5])).toBe(false);
  });

  test('returns false when all but one element matches', () => {
    expect(predicate([1, 2, 3], [2, 3, 4])).toBe(false);
    expect(predicate(new Set([1, 2, 3]), [2, 3, 4])).toBe(false);
  });

  test('does not modify the iterable content', () => {
    const arr = [1, 2, 3];
    predicate(arr, arr);
    expect(arr).toEqual([1, 2, 3]);

    const set = new Set([1, 2, 3]);
    predicate(set, set);
    expect([...set]).toEqual([1, 2, 3]);
  });
});
