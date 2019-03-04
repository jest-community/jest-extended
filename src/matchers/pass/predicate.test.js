import predicate from './predicate';

describe('true Predicate', () => {
  test('returns true when given nothing', () => {
    expect(predicate()).toBe(true);
  });

  test('returns true when given a value', () => {
    expect(predicate('', 'test')).toBe(true);
  });
});
