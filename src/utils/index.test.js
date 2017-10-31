import each from 'jest-each';

import { contains } from './';

describe('Utils', () => {
  describe('.contains', () => {
    const fn = () => {};
    const array = [1, 0, '', 'hello', false, true, undefined, null, NaN, fn, { foo: 'bar' }, ['foo']];
    const testRows = array.map(item => [item]);

    each(testRows).it('returns true when array contains given value: %s', value => {
      expect(contains(array, value)).toBe(true);
    });

    each(testRows).it('returns false when array does not contain given value: %s', value => {
      expect(contains([], value)).toBe(false);
    });
  });
});
