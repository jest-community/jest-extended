import predicate from './predicate';

const data = { a: 'foo', b: 'bar', c: 'baz' };

describe('.toContainEntries', () => {
  it('passes when object contains given entry', () => {
    expect(predicate(data, [['c', 'baz'], ['a', 'foo']])).toBe(true);
  });

  it('fails when object does not contain given entry', () => {
    expect(predicate(data, [['a', 'qux']])).toBe(false);
  });
});
