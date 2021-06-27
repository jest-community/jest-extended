import { equals } from 'expect/build/jasmineUtils';
import predicate from './predicate';

describe('toContainAllValues Predicate', () => {
  const shallow = {
    hello: 'world',
    foo: 0,
    bar: false,
  };
  const deep = {
    message: shallow,
    donald: 'duck',
  };
  const deepArray = {
    message: [shallow],
    donald: 'duck',
  };

  describe('returns true', () => {
    test('when given object contains all primitive values', () => {
      expect(predicate(equals, shallow, ['world', false, 0])).toBe(true);
    });

    test('when given object contains all values including objects', () => {
      expect(predicate(equals, deep, ['duck', { hello: 'world', foo: 0, bar: false }])).toBe(true);
    });

    test('when given object contains all values including arrays', () => {
      expect(predicate(equals, deepArray, ['duck', [{ hello: 'world', foo: 0, bar: false }]])).toBe(true);
    });
  });

  describe('returns false', () => {
    test('returns false when object does not contain all values', () => {
      const o = { a: 'foo', b: 'bar', c: 'baz' };
      expect(predicate(equals, o, ['foo', 'bar', 'baz', 'qux'])).toBe(false);
    });
    test('when given object does not contain all primitive value', () => {
      expect(predicate(equals, shallow, ['world', false])).toBe(false);
    });

    test('when given object does not contain all values including objects', () => {
      expect(predicate(equals, deep, ['made up value', 'duck', { hello: 'world', foo: 0 }])).toBe(false);
    });

    test('when given object does not contain all values including arrays', () => {
      expect(predicate(equals, deepArray, ['duck', 'made up value', [{ hello: 'world', foo: 0 }]])).toBe(false);
    });
  });
});
