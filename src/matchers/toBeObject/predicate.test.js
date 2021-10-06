import predicate from './predicate';

describe('toBeObject Predicate', () => {
  test('returns true when given an object', () => {
    expect(predicate({})).toBe(true);
  });

  test.each([[false], [''], [0], [() => {}], [undefined], [NaN]])('returns false when given: %s', given => {
    expect(predicate(given)).toBe(false);
  });
});
