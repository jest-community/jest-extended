import predicate from './predicate';

describe('toBeFunction Predicate', () => {
  test('returns true when given a function', () => {
    expect(predicate(() => {})).toBe(true);
  });

  test.each([[false], [''], [0], [{}], [[]], [undefined], [null], [NaN]])('returns false when given: %s', given => {
    expect(predicate(given)).toBe(false);
  });
});
