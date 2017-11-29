import predicate from './predicate';

describe('toBeSealed Predicate', () => {
  test('returns true when given a sealed object', () => {
    expect(predicate(Object.seal({}))).toBe(true);
  });

  test('returns false when given a non-sealed object', () => {
    expect(predicate({})).toBe(false);
  });
});
