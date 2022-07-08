import { equals } from '@jest/expect-utils';
import { contains, determinePropertyMessage, isJestMockOrSpy } from 'src/utils';

describe('Utils', () => {
  describe('.contains', () => {
    const fn = () => {};
    const array = [1, 0, '', 'hello', false, true, undefined, null, NaN, fn, { foo: 'bar' }, ['foo']];
    const testRows = array.map(item => [item]);

    test.each(testRows)('returns true when array contains given value: %s', value => {
      expect(contains(equals, array, value)).toBe(true);
    });

    test.each(testRows)('returns false when array does not contain given value: %s', value => {
      expect(contains(equals, [], value)).toBe(false);
    });
  });

  describe('.determinePropertyMessage', () => {
    test("returns error message 'Not Accessible' if the value doesn't have a length property", () => {
      const un = undefined;

      expect(determinePropertyMessage(un, 'length')).toBe('Not Accessible');
    });

    {
      const length = 5;

      const arr = new Array(length).fill(0);
      test('returns property when it has one', () => {
        expect(determinePropertyMessage(arr, 'length')).toBe(length);
      });
    }

    {
      const arr = new Array();

      test('returns property when it has a falsy one', () => {
        expect(determinePropertyMessage(arr, 'length')).toBe(0);
      });
    }

    {
      const date = new Date();
      const errorMessage = 'bob';

      test('returns custom error message when it is passed one', () => {
        expect(determinePropertyMessage(date, 'length', errorMessage)).toBe(errorMessage);
      });
    }
  });

  describe('.isJestMockOrSpy', () => {
    test('returns true if value is a jest mock', () => {
      const spy = jest.fn();
      expect(isJestMockOrSpy(spy)).toBe(true);
    });

    test('returns false if value is not a jest mock', () => {
      const fn = () => {};
      expect(isJestMockOrSpy(fn)).toBe(false);
    });
  });
});
