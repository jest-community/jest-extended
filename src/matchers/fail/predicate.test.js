import predicate from './predicate';

describe('fail Predicate', () => {
  test('returns false', () => {
    expect(predicate()).toBe(false);
  });
});
