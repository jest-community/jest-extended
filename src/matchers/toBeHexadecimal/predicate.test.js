import predicate from './predicate';

describe('toBeHexadecimal Predicate', () => {
  describe('returns true', () => {
    test('When valid hex is passed', () => {
      expect(predicate('#123abc')).toBe(true);
      expect(predicate('#ABC123')).toBe(true);
      expect(predicate('#FFF')).toBe(true);
      expect(predicate('#ecECec')).toBe(true);
      expect(predicate('#00f')).toBe(true);
    });
  });

  describe('return false', () => {
    test('When incomplete hex is passed', () => {
      expect(predicate('#ecec')).toBe(false);
      expect(predicate('#00')).toBe(false);
    });

    test('When octothorp is not passed', () => {
      expect(predicate('000')).toBe(false);
      expect(predicate('ececec')).toBe(false);
    });

    test('When invalid character is passed', () => {
      expect(predicate('#123ffg')).toBe(false);
      expect(predicate('#GGG')).toBe(false);
    });
  });
});
