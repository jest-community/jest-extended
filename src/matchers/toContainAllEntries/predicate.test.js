import predicate from './predicate';

const data = { a: 'foo', b: 'bar', c: 'baz' };

describe('.toContainAllEntries', () => {
  test('passes when given nested values', () => {
    expect(predicate({ hello: { message: 'world' } }, [['hello', { message: 'world' }]])).toBe(true);
  });
  test('passes when object only contains all of the given entries', () => {
    expect(
      predicate(data, [
        ['a', 'foo'],
        ['b', 'bar'],
        ['c', 'baz']
      ])
    ).toBe(true);
  });

  test('fails when object does not only contain all of the given entries', () => {
    expect(
      predicate(data, [
        ['a', 'foo'],
        ['b', 'bar']
      ])
    ).toBe(false);
  });

  test('fails when object does not contain all of the given entries', () => {
    expect(
      predicate(data, [
        ['a', 'foo'],
        ['b', 'bar'],
        ['c', 'baz'],
        ['d', 'qux']
      ])
    ).toBe(false);
  });
});
