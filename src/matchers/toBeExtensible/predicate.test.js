import predicate from './predicate';

describe('toBeExpected Predicate', () => {
  test.each([[{}], [[]], [() => {}]])('returns true when given extensible object: %s', given => {
    expect(predicate(given)).toBe(true);
  });

  test.each([[false], [''], [0], [undefined], [null], [NaN], [Object.seal({})], [Object.freeze({})]])(
    'returns false when given non-extensible object: %s',
    given => {
      expect(predicate(given)).toBe(false);
    },
  );
});
