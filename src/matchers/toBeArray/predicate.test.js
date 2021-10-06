import predicate from './predicate';

describe('toBeArray Predicate', () => {
  test('returns true when given an array', () => {
    expect(predicate(['an array'])).toBe(true);
  });

  test.each([[false], [''], [0], [{}], [() => {}], [undefined], [null], [NaN]])(
    'returns false when given: %s',
    given => {
      expect(predicate(given)).toBe(false);
    },
  );
});
