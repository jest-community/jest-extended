import predicate from './predicate';

describe('toIncludeMultiple Predicate', () => {
  describe('returns true', () => {
    it('when value includes substring n times', () => {
      expect(predicate('hello hello world', 'hello', 2)).toBe(true);
    });
  });

  describe('returns false', () => {
    it('when value includes substring less times', () => {
      expect(predicate('hello hello world', 'hello', 3)).toBe(false);
    });

    it('when value includes substring more times', () => {
      expect(predicate('hello hello world', 'hello', 1)).toBe(false);
    });
  });
});
