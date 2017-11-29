import predicate from './predicate';

describe('toBeEmpty Predicate', () => {
  describe('returns true', () => {
    test('When empty string is passed', () => {
      expect(predicate('')).toBe(true);
    });

    test('When empty string object is passed', () => {
      expect(predicate(new String(''))).toBe(true);
    });

    test('When empty array is passed', () => {
      expect(predicate([])).toBe(true);
    });

    test('When empty object is passed', () => {
      expect(predicate({})).toBe(true);
    });
  });

  describe('return false', () => {
    test('When array with members is passed', () => {
      expect(predicate(['1'])).toBe(false);
    });

    test('When non-empty string is passed', () => {
      expect(predicate('string')).toBe(false);
    });

    test('When non-empty string object is passed', () => {
      expect(predicate(new String('string'))).toBe(false);
    });

    test('When object with members is passed', () => {
      expect(predicate({ foo: 'bar' })).toBe(false);
    });
  });
});
