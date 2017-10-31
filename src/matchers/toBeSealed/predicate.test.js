import predicate from './predicate';

describe('toBeSealed Predicate', () => {
  it('returns true when given a sealed object', () => {
    expect(predicate(Object.seal({}))).toBe(true);
  });

  it('returns false when given a non-sealed object', () => {
    expect(predicate({})).toBe(false);
  });
});
