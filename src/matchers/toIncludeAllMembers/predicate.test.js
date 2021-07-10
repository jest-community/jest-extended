import { equals } from 'expect/build/jasmineUtils';
import predicate from './predicate';

describe('toIncludeAllMembers Predicate', () => {
  const array1 = [1, 2, 3];
  const set1 = [2, 1, 3];
  const array2 = [4, 5, 6];
  const set2 = [1, 2, 3];

  describe('returns true', () => {
    test('when Array contains all the same members of given set', () => {
      expect(predicate(equals, array1, set1)).toBe(true);
    });

    test('when Array contains all of the same nested members of given set', () => {
      expect(predicate(equals, [{ hello: 'world' }, { foo: 'bar' }], [{ foo: 'bar' }])).toBe(true);
    });
  });

  describe('returns false', () => {
    test('when Array does not contain any of the members of given set', () => {
      expect(predicate(equals, array2, set2)).toBe(false);
    });

    test('when Array contains does not contain all of the same nested members of given set', () => {
      expect(predicate(equals, [{ hello: 'world' }, { foo: 'bar' }], [{ foo: 'qux' }])).toBe(false);
    });
  });
});
