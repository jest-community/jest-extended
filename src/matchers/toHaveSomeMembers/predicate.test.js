import each from 'jest-each';
import predicate from './predicate';

describe('toHaveSomeMembers Predicate', () => {
  const array = ['world', false, undefined, null, '', 0];
  const shallow = { hello: 'world' };

  describe('returns true', () => {
    each([['world'], [false], [undefined], [null], [''], [0]]).it(
      'when given array contains primitive value: %s',
      given => {
        expect(predicate([given], array)).toBe(true);
      }
    );

    it('when given array contains object value', () => {
      expect(predicate([shallow, 7], [shallow])).toBe(true);
    });

    it('when given object contains array value', () => {
      expect(predicate([[shallow]], [[shallow], 7])).toBe(true);
    });
  });

  describe('returns false', () => {
    it('when given array does not contain primitive value', () => {
      expect(predicate([3, 4, 5], [1])).toBe(false);
    });

    it('when given array does not contain object value', () => {
      expect(predicate([3], [{ foo: 'bar' }])).toBe(false);
    });

    it('when given object does not contain array value', () => {
      expect(predicate([7], [[7]])).toBe(false);
    });
  });
});
