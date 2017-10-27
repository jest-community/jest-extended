import predicate from './predicate';

describe('toIncludeMultiple Predicate', () => {
  describe('returns true', () => {
    it('when string contains all substrings', () => {
      expect(predicate('hello world', ['hello', 'world'])).toBe(true);
    });
  });

  describe('returns false', () => {
    it('when string does not contain one or more substrings', () => {
      expect(predicate('hello world', ['hello', 'world', 'bob'])).toBe(false);
    });
  });
});
