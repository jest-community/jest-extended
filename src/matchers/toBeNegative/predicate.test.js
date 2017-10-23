import predicate from './predicate';

describe('toBeNegative Predicate', () => {
  describe('returns true', () => {
    it('When negative number is passed', () => {
      expect(predicate(-1)).toBe(true);
      expect(predicate(-100.1)).toBe(true);
    });
  });

  describe('return false', () => {
    it('When positive number is passed', () => {
      expect(predicate(1)).toBe(false);
      expect(predicate(100.1)).toBe(false);
      expect(predicate(Infinity)).toBe(false);
    });

    it('When Infinity is passed', () => {
      expect(predicate(Infinity)).toBe(false);
    });

    it('When NaN is passed', () => {
      expect(predicate(NaN)).toBe(false);
      expect(predicate('Not a number!')).toBe(false);
      expect(predicate({})).toBe(false);
    });
  });
});
