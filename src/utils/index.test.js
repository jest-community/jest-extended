import { asArray, contains, determinePropertyMessage } from './';

describe('Utils', () => {
  describe('.contains', () => {
    const fn = () => {};
    const array = [1, 0, '', 'hello', false, true, undefined, null, NaN, fn, { foo: 'bar' }, ['foo']];
    const testRows = array.map(item => [item]);

    test.each(testRows)('returns true when array contains given value: %s', value => {
      expect(contains(array, value)).toBe(true);
    });

    test.each(testRows)('returns false when array does not contain given value: %s', value => {
      expect(contains([], value)).toBe(false);
    });
  });

  describe('.asArray', () => {
    test('returns the argument when given an array', () => {
      const array = [1, 2, 3];

      expect(asArray(array)).toBe(array);
    });

    test('returns a new array when given a non-array iterable', () => {
      const set = new Set([1, 2, 3]);
      const array = asArray(set);

      expect(array).toBeInstanceOf(Array);
      expect(array).toHaveLength(3);
      expect(array).toContain(1);
      expect(array).toContain(2);
      expect(array).toContain(3);
    });

    test('returns undefined when given a non-iterable', () => {
      expect(asArray(true)).toBeUndefined();
      expect(asArray(123)).toBeUndefined();
      expect(asArray({})).toBeUndefined();
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
});
