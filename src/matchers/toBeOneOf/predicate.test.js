import each from 'jest-each';
import predicate from './predicate';

describe('.toBeOneOf', () => {
  each([[1], [null], [undefined], [false], ['']]).it(
    'returns true when primitive value: %s is in given array',
    value => {
      expect(predicate(value, [1, 2, 3, null, undefined, false, ''])).toBe(true);
    }
  );

  each([[{ hello: 'world' }], [['foo']]]).it('returns true when nested value: %s is in given array', value => {
    expect(predicate(value, [1, 2, { hello: 'world' }, ['foo']])).toBe(true);
  });

  each([
    [0],
    [null],
    [undefined],
    [false],
    [''],
    [{ hello: 'world' }],
    [['foo']]
  ]).it('returns false when value: %s is not in given array', value => {
    expect(predicate(value, [1, 2, 3])).toBe(false);
  });
});
