import each from 'jest-each';
import predicate from './predicate';

describe('toBeEmpty Predicate', () => {
  describe('returns true', () => {
    it('When empty string is passed', () => {
      expect(predicate('')).toBe(true);
    });

    it('When empty string object is passed', () => {
      expect(predicate(new String(''))).toBe(true);
    });

    it('When empty array is passed', () => {
      expect(predicate([])).toBe(true);
    });

    it('When empty object is passed', () => {
      expect(predicate({})).toBe(true);
    });
  });

  describe('return false', () => {
    it('When array with members is passed', () => {
      expect(predicate(['1'])).toBe(false);
    });

    it('When non-empty string is passed', () => {
      expect(predicate('string')).toBe(false);
    });

    it('When non-empty string object is passed', () => {
      expect(predicate(new String('string'))).toBe(false);
    });

    it('When object with members is passed', () => {
      expect(predicate({ foo: 'bar' })).toBe(false);
    });
  });
});
