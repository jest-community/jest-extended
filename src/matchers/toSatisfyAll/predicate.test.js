import predicate from './predicate';

describe('toSatisfyAll', () => {
  let isOdd = el => el % 2 === 1;

  describe('returns true', () => {
    it('when all elements satisfy', () => {
      expect(predicate([1, 3, 7, 9], isOdd)).toBe(true);
    });

    it('works for repeated elements', () => {
      expect(predicate([1, 3, 3, 9], isOdd)).toBe(true);
    });
  });

  describe('returns false', () => {
    it('when all elements fail', () => {
      expect(predicate([10, 2, 4, 6], isOdd)).toBe(false);
    });

    it('when either element fails', () => {
      expect(predicate([5, 7, 8, 9], isOdd)).toBe(false);
    });

    it('works for repeated elements', () => {
      expect(predicate([1, 3, 3, 9, 10, 11], isOdd)).toBe(false);
    });
  });
});
