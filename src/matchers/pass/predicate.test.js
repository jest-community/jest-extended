import predicate from './predicate';

describe('true Predicate', () => {
  test('returns true', () => {
    expect(predicate()).toBe(true);
  });
});
