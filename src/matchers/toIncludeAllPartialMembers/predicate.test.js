import predicate from './predicate';

describe('toIncludeAllPartialMembers Predicate', () => {
  describe('returns true', () => {
    test('when Array contains all of the same nested partial members of given set', () => {
      expect(predicate([{ hello: 'world' }, { foo: 'bar', baz: 'qux' }], [{ foo: 'bar' }])).toBe(true);
    });
  });

  describe('returns false', () => {
    test('when Array contains does not contain all of the same nested partial members of given set', () => {
      expect(predicate([{ hello: 'world' }, { foo: 'bar', baz: 'qux' }], [{ foo: 'qux' }])).toBe(false);
    });
  });
});
