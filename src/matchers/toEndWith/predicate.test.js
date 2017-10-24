import predicate from './predicate';

describe('toEndWith Predicate', () => {
  it('returns true when string ends with given suffix', () => {
    expect(predicate('world', 'hello world')).toBe(true);
  });

  it('returns false when string does not end with given suffix', () => {
    expect(predicate('hello', 'hello world')).toBe(false);
  });
});
