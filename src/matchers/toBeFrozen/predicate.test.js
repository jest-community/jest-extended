import predicate from './predicate';

describe('toBeFrozen Predicate', () => {
  it('returns true when given a frozen object', () => {
    expect(predicate(Object.freeze({}))).toBe(true);
  });

  it('returns false when given a non-frozen object', () => {
    expect(predicate({})).toBe(false);
  });
});
