import predicate from './predicate';

describe('toBePositive Predicate', () => {
  test('returns true when given a positive number', () => {
    expect(predicate(1)).toBe(true);
  });

  test.each([[false], [''], [-1], [0], [{}], [[]], [() => {}], [undefined], [null], [NaN], [Infinity]])(
    'returns false when given: %s',
    given => {
      expect(predicate(given)).toBe(false);
    },
  );
});
