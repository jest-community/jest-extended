import predicate from './predicate';

describe('toBeDateString Predicate', () => {
  test('returns true when given a date string', () => {
    expect(predicate(new Date().toISOString())).toBe(true);
  });

  test('returns false when given a non date string', () => {
    expect(predicate('not a date')).toBe(false);
  });
});
