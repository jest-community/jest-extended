import { equals } from 'expect/build/jasmineUtils';
import predicate from './predicate';

describe('toIncludeAnyMembers Predicate', () => {
  const array = ['world', false, undefined, null, '', 0];
  const shallow = { hello: 'world' };

  describe('returns true', () => {
    test.each([['world'], [false], [undefined], [null], [''], [0]])(
      'when given array contains primitive value: %s',
      given => {
        expect(predicate(equals, [given], array)).toBe(true);
      },
    );

    test('when given array contains object value', () => {
      expect(predicate(equals, [shallow, 7], [shallow])).toBe(true);
    });

    test('when given object contains array value', () => {
      expect(predicate(equals, [[shallow]], [[shallow], 7])).toBe(true);
    });
  });

  describe('returns false', () => {
    test('when given array does not contain primitive value', () => {
      expect(predicate(equals, [3, 4, 5], [1])).toBe(false);
    });

    test('when given array does not contain object value', () => {
      expect(predicate(equals, [3], [{ foo: 'bar' }])).toBe(false);
    });

    test('when given object does not contain array value', () => {
      expect(predicate(equals, [7], [[7]])).toBe(false);
    });
  });
});
