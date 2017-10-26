import predicate from './predicate';

const data = { hello: 'world' };

describe('toContainAnyValues Predicate', () => {
  const data = { a: 'foo', b: 'bar', c: 'baz' };

  it('passes when object contains at least one of the given values ', () => {
    expect(predicate(data, ['qux', 'foo'])).toBe(true);
    expect(predicate(data, ['qux', 'bar'])).toBe(true);
    expect(predicate(data, ['foo', 'bar'])).toBe(true);
    expect(predicate(data, ['baz'])).toBe(true);
  });

  it('fails when object does not contain any given values', () => {
    expect(predicate(data, ['qux'])).toBe(false);
    expect(predicate(data, ['qux', 'zoo'])).toBe(false);
  });
});
