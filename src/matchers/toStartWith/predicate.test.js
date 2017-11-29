import predicate from './predicate';

describe('toStartWith Predicate', () => {
  test('returns true when string starts with given prefix', () => {
    expect(predicate('hello', 'hello world')).toBe(true);
  });

  test('returns false when string does not start with given prefix', () => {
    expect(predicate('world', 'hello world')).toBe(false);
  });
});
