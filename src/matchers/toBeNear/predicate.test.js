import predicate from './predicate';

describe('toBeNear predicate', () => {
  const value = 2;
  const offset = 1;

  test('returns true when the given number is greater than or equal to `value - offset`', () => {
    expect(predicate(1, value, offset)).toBe(true);
  });

  test('returns true when the given number is less than or equal to `value + offset`', () => {
    expect(predicate(3, value, offset)).toBe(true);
  });

  test('returns false when the given number is less than `value - offset`', () => {
    expect(predicate(0, value, offset)).toBe(false);
  });

  test('returns false when the given number is greater than `value + offset`', () => {
    expect(predicate(4, value, offset)).toBe(false);
  });
});
