import { contains, determinePropertyMessage, isJestMockOrSpy, tryParseJSON } from 'src/utils';

let equals;

try {
  // eslint-disable-next-line import/no-unresolved
  equals = require('@jest/expect-utils').equals;
} catch (error) {
  if (error.code === 'MODULE_NOT_FOUND') {
    // eslint-disable-next-line import/no-unresolved
    equals = require('expect/build/jasmineUtils').equals;
  } else {
    throw error;
  }
}

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

  describe('.tryParseJSON', () => {
    test('returns undefined when the input is not valid JSON', () => {
      const invalidJson = '<h1>This is not a valid JSON string</h1>';

      expect(tryParseJSON(invalidJson)).toBeUndefined();
    });

    test('returns the expected string when the input is a valid JSON string', () => {
      const message = 'Hello World!';
      const validJsonString = JSON.stringify(message);

      expect(tryParseJSON(validJsonString)).toBe(message);
    });

    test('returns the expected number when the input is a valid JSON number', () => {
      const number = 42;
      const validJsonNumber = JSON.stringify(number);

      expect(tryParseJSON(validJsonNumber)).toBe(number);
    });

    test('returns the expected object when the input is a valid JSON object', () => {
      const object = { a: 42, b: 'Hello World!' };
      const validJsonObjet = JSON.stringify(object);

      expect(tryParseJSON(validJsonObjet)).toEqual(object);
    });
  });
});
