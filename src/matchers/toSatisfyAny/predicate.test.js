import predicate from './predicate';

describe('toSatisfyAny', () => {
  let isOdd = el => el % 2 === 1;

  describe('returns true', () => {
    test('when any element satisfies', () => {
      expect(predicate([1, 2, 3, 4], isOdd)).toBe(true);
    });

    test('works for repeated elements', () => {
      expect(predicate([1, 1, 2, 4], isOdd)).toBe(true);
    });
  });

  describe('returns false', () => {
    test('when all elements fail', () => {
      expect(predicate([10, 2, 4, 6], isOdd)).toBe(false);
    });
  });
});
