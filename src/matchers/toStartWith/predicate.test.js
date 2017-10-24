import predicate from './predicate';

describe('toStartWith Predicate', () => {
  it('returns true when string starts with given prefix', () => {
    expect(predicate('hello', 'hello world')).toBe(true);
  });

  it('returns false when string does not start with given prefix', () => {
    expect(predicate('world', 'hello world')).toBe(false);
  });
});
