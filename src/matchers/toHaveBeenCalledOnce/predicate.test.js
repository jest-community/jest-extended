import predicate from './predicate';

describe('.toHaveBeenCalledOnce predicate', () => {
  test('should return false when passed an empty array', () => {
    expect(predicate([])).toBe(false);
  });

  test('should return false when passed an array of length 2', () => {
    expect(predicate([1, 2])).toBe(false);
  });

  test('should return true when passed an array of length 1', () => {
    expect(predicate([1])).toBe(true);
  });
});
