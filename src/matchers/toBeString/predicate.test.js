import predicate from './predicate';

describe('toBeString Predicate', () => {
  test('returns true when given a string literal', () => {
    expect(predicate('string example')).toBe(true);
  });

  test('returns true when given a string object', () => {
    expect(predicate(new String('string example'))).toBe(true);
  });

  test.each([[false], [0], [{}], [[]], [() => {}], [undefined], [null], [NaN]])(
    'returns false when given: %s',
    given => {
      expect(predicate(given)).toBe(false);
    },
  );
});
