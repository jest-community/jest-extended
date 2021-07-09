import predicate from './predicate';

describe('toBeEmptyObject Predicate', () => {
  test('returns true when given an empty object', () => {
    expect(predicate({})).toBe(true);
  });

  test('returns false when given a non-empty object', () => {
    expect(predicate({ property1: 'something' })).toBe(false);
  });
});
