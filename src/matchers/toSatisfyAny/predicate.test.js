import predicate from './predicate';

describe('toSatisfyAny', () => {
  let isOdd = el => el % 2 === 1;

  describe('returns true', () => {
    test('when any elements satisfy', () => {
      expect(predicate([2, 3, 6, 8], isOdd)).toBe(true);
    });

    test('works for repeated elements', () => {
      expect(predicate([2, 3, 3, 8], isOdd)).toBe(true);
    });
  });

  describe('returns false', () => {
    test('when all elements fail', () => {
      expect(predicate([10, 2, 4, 6], isOdd)).toBe(false);
    });

    test('works for repeated elements', () => {
      expect(predicate([2, 4, 4, 8, 10], isOdd)).toBe(false);
    });
  });
});
