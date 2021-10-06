import predicate from './predicate';

describe('toBeFalse Predicate', () => {
  test('returns true when given false', () => {
    expect(predicate(false)).toBe(true);
  });

  test.each([[true], [''], [0], [{}], [[]], [() => {}], [undefined], [null], [NaN]])(
    'returns false when given: %s',
    given => {
      expect(predicate(given)).toBe(false);
    },
  );
});
