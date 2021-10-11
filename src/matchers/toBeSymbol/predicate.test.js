import predicate from './predicate';

describe('toBeSymbol Predicate', () => {
  test('returns true when given a symbol', () => {
    expect(predicate(Symbol())).toBe(true);
  });

  test.each([[false], [''], [0], [{}], [[]], [undefined], [null], [NaN], [() => {}]])(
    'returns false when given: %s',
    given => {
      expect(predicate(given)).toBe(false);
    },
  );
});
