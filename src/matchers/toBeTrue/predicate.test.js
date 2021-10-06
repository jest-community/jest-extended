import predicate from './predicate';

describe('toBeTrue Predicate', () => {
  test('returns true when given an array', () => {
    expect(predicate(true)).toBe(true);
  });

  test.each([[false], [''], [0], [{}], [[]], [() => {}], [undefined], [null], [NaN]])(
    'returns false when given: %s',
    given => {
      expect(predicate(given)).toBe(false);
    },
  );
});
