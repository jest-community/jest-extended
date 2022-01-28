import { equals } from 'expect/build/jasmineUtils';
import predicate from './predicate';

describe('toBeEmpty Predicate', () => {
  describe('returns true', () => {
    test('When empty string is passed', () => {
      expect(predicate(equals, '')).toBe(true);
    });

    test('When empty string object is passed', () => {
      expect(predicate(equals, new String(''))).toBe(true);
    });

    test('When empty array is passed', () => {
      expect(predicate(equals, [])).toBe(true);
    });

    test('When empty object is passed', () => {
      expect(predicate(equals, {})).toBe(true);
    });

    test('When empty Set is passed', () => {
      expect(predicate(equals, new Set())).toBe(true);
    });

    test('When empty Map is passed', () => {
      expect(predicate(equals, new Map([]))).toBe(true);
    });

    test('When empty generator is passed', () => {
      function* yieldsNothing() {}

      expect(predicate(equals, yieldsNothing())).toBe(true);
    });
  });

  describe('return false', () => {
    test('When array with members is passed', () => {
      expect(predicate(equals, ['1'])).toBe(false);
    });

    test('When non-empty string is passed', () => {
      expect(predicate(equals, 'string')).toBe(false);
    });

    test('When blank string is passed', () => {
      expect(predicate(equals, ' ')).toBe(false);
    });

    test('When non-empty string object is passed', () => {
      expect(predicate(equals, new String('string'))).toBe(false);
    });

    test('When object with members is passed', () => {
      expect(predicate(equals, { foo: 'bar' })).toBe(false);
    });

    test('When non-empty Set is passed', () => {
      expect(predicate(equals, new Set(['']))).toBe(false);
    });

    test('When non-empty Map is passed', () => {
      expect(predicate(equals, new Map([['k', 'v']]))).toBe(false);
    });

    test('When non-empty generator is passed', () => {
      function* yieldsSomething() {
        yield 'a thing';
      }

      expect(predicate(equals, yieldsSomething())).toBe(false);
    });
  });
});
