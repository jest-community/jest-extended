import predicate from './predicate';

describe('toEqualCaseInsensitive Predicate', () => {
  it('returns true given equal strings regardless of case', () => {
    expect(predicate('hello WORLD', 'hello world')).toEqual(true);
    expect(predicate('HeLLo WORLD', 'hello world')).toEqual(true);
    expect(predicate('HELLO WORLD', 'hello world')).toEqual(true);
  });

  it('returns false when given two different strings', () => {
    expect(predicate('hello', 'world')).toEqual(false);
  });
});
