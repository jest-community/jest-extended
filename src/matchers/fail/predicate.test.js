import predicate from './predicate';

describe('fail Predicate', () => {
  test('returns false when given nothing', () => {
    expect(predicate()).toBe(false);
  });

  test('returns false when given a value', () => {
    expect(predicate('', 'test')).toBe(false);
  });
});
