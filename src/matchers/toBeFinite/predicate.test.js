import predicate from './predicate';

describe('toBeFinite Predicate', () => {
  it('returns true when given a finite number', () => {
    expect(predicate(1)).toBe(true);
  });

  it('return false when given infinity', () => {
    expect(predicate(Infinity)).toBe(false);
  });

  it('return false when given NaN', () => {
    expect(predicate(NaN)).toBe(false);
  });
});
