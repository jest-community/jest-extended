import predicate from './predicate';

const data = { a: 'hello', b: 'world' };

describe('.toContainAllKeys', () => {
  test('passes when given object contains all keys', () => {
    expect(predicate(data, ['a', 'b'])).toBe(true);
  });

  test('passes when given object contains all keys, regardless of order', () => {
    expect(predicate(data, ['b', 'a'])).toBe(true);
  });

  test('fails when given object does not contain all keys', () => {
    expect(predicate(data, ['b'])).toBe(false);
  });
});
