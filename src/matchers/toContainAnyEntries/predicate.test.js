import predicate from './predicate';

const data = { a: 'foo', b: 'bar', c: 'baz' };

describe('.toContainAnyEntries', () => {
  it('passes when given object contains entries', () => {
    expect(predicate(data, [['a', 'qux'], ['a', 'foo'], ['x', 'foo']])).toBe(true);
  });

  it('passes when given object contains entries with nested values', () => {
    expect(
      predicate({ hello: { message: 'world' } }, [['hello', { message: 'world' }], ['a', 'foo'], ['x', 'foo']])
    ).toBe(true);
  });

  it('fails when given object does not contain entries', () => {
    expect(predicate(data, [['a', 'qux'], ['b', 'foo'], ['x', 'foo']])).toBe(false);
  });
});
