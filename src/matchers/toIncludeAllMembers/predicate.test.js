import predicate from './predicate';

describe('toIncludeAllMembers Predicate', () => {
  const array1 = [1, 2, 3];
  const set1 = [2, 1, 3];
  const array2 = [4, 5, 6];
  const set2 = [1, 2, 3];

  describe('returns true', () => {
    test('when iterable contains all the same members of given set', () => {
      expect(predicate(array1, set1)).toBe(true);
      expect(predicate(new Set(array1), set1)).toBe(true);
      expect(predicate(new Set(array1), new Set(set1))).toBe(true);
    });

    test('when iterable contains all of the same nested members of given set', () => {
      expect(predicate([{ hello: 'world' }, { foo: 'bar' }], [{ foo: 'bar' }])).toBe(true);
      expect(predicate(new Set([{ hello: 'world' }, { foo: 'bar' }]), [{ foo: 'bar' }])).toBe(true);
    });
  });

  describe('returns false', () => {
    test('when iterable does not contain any of the members of given set', () => {
      expect(predicate(array2, set2)).toBe(false);
      expect(predicate(new Set(array2), set2)).toBe(false);
      expect(predicate(new Set(array2), new Set(set2))).toBe(false);
    });

    test('when iterable contains does not contain all of the same nested members of given set', () => {
      expect(predicate([{ hello: 'world' }, { foo: 'bar' }], [{ foo: 'qux' }])).toBe(false);
      expect(predicate(new Set([{ hello: 'world' }, { foo: 'bar' }]), new Set([{ foo: 'qux' }]))).toBe(false);
    });
  });
});
