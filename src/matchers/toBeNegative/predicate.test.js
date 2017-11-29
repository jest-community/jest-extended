import predicate from './predicate';

describe('toBeNegative Predicate', () => {
  describe('returns true', () => {
    test('When negative number is passed', () => {
      expect(predicate(-1)).toBe(true);
      expect(predicate(-100.1)).toBe(true);
    });
  });

  describe('return false', () => {
    test('When positive number is passed', () => {
      expect(predicate(1)).toBe(false);
      expect(predicate(100.1)).toBe(false);
      expect(predicate(Infinity)).toBe(false);
    });

    test('When Infinity is passed', () => {
      expect(predicate(Infinity)).toBe(false);
    });

    test('When NaN is passed', () => {
      expect(predicate(NaN)).toBe(false);
      expect(predicate('Not a number!')).toBe(false);
      expect(predicate({})).toBe(false);
    });
  });
});
