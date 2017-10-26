import predicate from './predicate';

describe('toHaveAllMembers Predicate', () => {
  const array1 = [1, 2, 3];
  const set1 = [2, 1, 3];
  const array2 = [4, 5, 6];
  const set2 = [1, 2, 3];

  describe('returns true', () => {
    it('when Array contains all the same members of given set', () => {
      expect(predicate(array1, set1)).toBe(true);
    });
  });

  describe('returns false', () => {
    it('when Array does not contain any of the members of given set', () => {
      expect(predicate(array2, set2)).toBe(false);
    });
  });
});
