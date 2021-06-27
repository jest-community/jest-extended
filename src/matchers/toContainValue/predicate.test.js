import { equals } from 'expect/build/jasmineUtils';
import each from 'jest-each';
import predicate from './predicate';

describe('toContainValue Predicate', () => {
  const shallow = { hello: 'world', bool: false, nothing: undefined, absent: null, empty: '', zero: 0 };
  const deep = { message: { hello: 'world' } };
  const deepArray = { message: [{ hello: 'world' }] };

  describe('returns true', () => {
    each([['world'], [false], [undefined], [null], [''], [0]]).test(
      'when given object contains primitive value: %s',
      value => {
        expect(predicate(equals, shallow, value)).toBe(true);
      },
    );

    test('when given object contains object value', () => {
      expect(predicate(equals, deep, { hello: 'world' })).toBe(true);
    });

    test('when given object contains array value', () => {
      expect(predicate(equals, deepArray, [{ hello: 'world' }])).toBe(true);
    });
  });

  describe('returns false', () => {
    each([['world'], [false], [undefined], [null], [''], [0]]).test(
      'when given object does not contain primitive value: %s',
      value => {
        expect(predicate(equals, {}, value)).toBe(false);
      },
    );

    test('when given object does not contain object value', () => {
      expect(predicate(equals, deep, { foo: 'bar' })).toBe(false);
    });

    test('when given object does not contain array value', () => {
      expect(predicate(equals, deepArray, [{ bar: 'foo' }])).toBe(false);
    });
  });
});
