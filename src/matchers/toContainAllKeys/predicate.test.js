import predicate from './predicate';

const data = { a: 'hello', b: 'world' };

describe('.toContainAllKeys', () => {
  it('passes when given object contains all keys', () => {
    expect(predicate(data, ['a', 'b'])).toBe(true);
  });

  it('passes when given object contains all keys, regardless of order', () => {
    expect(predicate(data, ['b', 'a'])).toBe(true);
  });

  it('fails when given object does not contain all keys', () => {
    expect(predicate(data, ['b'])).toBe(false);
  });
});
