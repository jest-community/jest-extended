import predicate from './predicate';

describe('.toBeOneOf', () => {
  it('passes when value is in given array', () => {
    expect(predicate(1, [1, 2, 3])).toBe(true);
  });

  it('fails when value is not in given array', () => {
    expect(predicate(4, [1, 2, 3])).toBe(false);
  });
});
