import predicate from './predicate';

describe('toBeTrue Predicate', () => {
  it('returns true when given true', () => {
    expect(predicate(true)).toBe(true);
  });
});
