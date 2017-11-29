import predicate from './predicate';

describe('toBeFrozen Predicate', () => {
  test('returns true when given a frozen object', () => {
    expect(predicate(Object.freeze({}))).toBe(true);
  });

  test('returns false when given a non-frozen object', () => {
    expect(predicate({})).toBe(false);
  });
});
