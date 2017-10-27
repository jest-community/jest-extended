import predicate from './predicate';

const data = { a: 'foo', b: 'bar', c: 'baz' };

describe('.toContainKeys', () => {
  it('passes when object contains all keys', () => {
    expect(predicate(data, ['a', 'b'])).toBe(true);
  });

  it('fails when object does not contain all keys', () => {
    expect(predicate(data, ['d'])).toBe(false);
  });
});
