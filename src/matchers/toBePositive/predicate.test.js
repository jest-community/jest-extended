import predicate from './predicate';

describe('toBePositive Predicate', () => {
  it('returns true when given positive number', () => {
    expect(predicate(1)).toBe(true);
    expect(predicate(1.5)).toBe(true);
  });

  it('returns false when given positive bool', () => {
    expect(predicate(true)).toBe(false);
  });

  it('returns true when given a positive number in brackets', () => {
    expect(predicate([123])).toBe(true);
  });

  it('returns false when given a negative number in brackets', () => {
    expect(predicate([-123])).toBe(false);
  });

  it('returns false when given negative number', () => {
    expect(predicate(-1)).toBe(false);
    expect(predicate(-1.5)).toBe(false);
  });

  it('returns false when given negative Infinity', () => {
    expect(predicate(Infinity)).toBe(false);
  });

  it('returns false when given non positive number', () => {
    expect(predicate(0)).toBe(false);
  });

  it('returns false when given not a number', () => {
    expect(predicate(false)).toBe(false);
    expect(predicate('str')).toBe(false);
    expect(predicate([123, 123])).toBe(false);
  });
});
