import predicate from './predicate';

describe('toBeDate Predicate', () => {
  test('returns true when given a date', () => {
    expect(predicate(new Date('12/25/2017'))).toBe(true);
  });

  test.each([[true], [false], [''], [0], [{}], [() => {}], [undefined], [null], [NaN]])(
    'returns false when given: %s',
    given => {
      expect(predicate(given)).toBe(false);
    },
  );
});
