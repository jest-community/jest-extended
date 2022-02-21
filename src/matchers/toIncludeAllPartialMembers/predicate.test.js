import { equals } from 'expect/build/jasmineUtils';
import predicate from './predicate';

describe('toIncludeAllPartialMembers Predicate', () => {
  describe('returns true', () => {
    test('when Array contains all of the same nested partial members of given set', () => {
      expect(predicate(equals, [{ hello: 'world' }, { foo: 'bar', baz: 'qux' }], [{ foo: 'bar' }])).toBe(true);
    });
  });

  describe('returns false', () => {
    test('when Array contains does not contain all of the same nested partial members of given item', () => {
      expect(predicate(equals, [{ hello: 'world' }, { foo: 'bar', baz: 'qux' }], [{ foo: 'bar', bax: 'qux' }])).toBe(
        false,
      );
    });

    test('when Array contains does not contain all of the same nested partial members of given set', () => {
      expect(
        predicate(equals, [{ hello: 'world' }, { foo: 'bar', baz: 'qux' }], [{ hello: 'world' }, { foo: 'qux' }]),
      ).toBe(false);
    });
  });
});