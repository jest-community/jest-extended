import predicate from './predicate';

const data = { a: 'foo', b: 'bar', c: 'baz' };

describe('.toContainEntry', () => {
  it('passes when object contains given entry', () => {
    expect(predicate(data, ['a', 'foo'])).toBe(true);
    expect(predicate(data, ['b', 'bar'])).toBe(true);
    expect(predicate(data, ['c', 'baz'])).toBe(true);
  });

  it('passes when object contain given entry with nested value', () => {
    expect(predicate({ data }, ['data', data])).toBe(true);
  });

  it('fails when object does not contain given entry', () => {
    expect(predicate(data, ['a', 'qux'])).toBe(false);
  });
});
