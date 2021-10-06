import predicate from './predicate';

describe('.toBeOneOf', () => {
  test.each([[1], [null], [undefined], [false], ['']])(
    'returns true when primitive value: %s is in given array',
    value => {
      expect(predicate(value, [1, 2, 3, null, undefined, false, ''])).toBe(true);
    },
  );

  test.each([[{ hello: 'world' }], [['foo']]])('returns true when nested value: %s is in given array', value => {
    expect(predicate(value, [1, 2, { hello: 'world' }, ['foo']])).toBe(true);
  });

  test.each([[0], [null], [undefined], [false], [''], [{ hello: 'world' }], [['foo']]])(
    'returns false when value: %s is not in given array',
    value => {
      expect(predicate(value, [1, 2, 3])).toBe(false);
    },
  );
});
