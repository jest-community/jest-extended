import predicate from './predicate';

const data = { a: 'foo', b: 'bar', c: 'baz' };

describe('.toContainAnyEntries', () => {
  it('passes when given object contains key', () => {
    expect(predicate(data, [['a', 'qux'], ['a', 'foo']])).toBe(true);
  });

  it('fails when given object does not contain key', () => {
    expect(predicate(data, [['a', 'qux'], ['b', 'foo']])).toBe(false);
  });
});
