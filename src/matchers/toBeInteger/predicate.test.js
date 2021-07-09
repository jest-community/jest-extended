import predicate from './predicate';

describe('toBeInteger Predicate', () => {
  describe('returns true', () => {
    test('When integer is passed', () => {
      expect(predicate(1)).toBe(true);
      expect(predicate(0)).toBe(true);
      expect(predicate(-1)).toBe(true);
      expect(predicate('1')).toBe(true);
    });
  });

  describe('return false', () => {
    test('When fraction is passed', () => {
      expect(predicate(1.1)).toBe(false);
      expect(predicate(0.1)).toBe(false);
      expect(predicate(-1.1)).toBe(false);
      expect(predicate('1.1')).toBe(false);
    });

    test('When NaN is passed', () => {
      expect(predicate(NaN)).toBe(false);
      expect(predicate('Not a number!')).toBe(false);
      expect(predicate({})).toBe(false);
    });
  });
});
