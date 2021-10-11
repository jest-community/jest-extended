import predicate from './predicate';

const data = { a: 'foo', b: 'bar', c: 'baz' };

describe('.toContainEntries', () => {
  test('passes when object contains given entry', () => {
    expect(
      predicate(data, [
        ['c', 'baz'],
        ['a', 'foo'],
      ]),
    ).toBe(true);
  });

  test('passes when given nested values', () => {
    expect(predicate({ hello: { message: 'world' } }, [['hello', { message: 'world' }]])).toBe(true);
  });

  test('fails when object does not contain given entry', () => {
    expect(
      predicate(data, [
        ['a', 'qux'],
        ['b', 'bar'],
      ]),
    ).toBe(false);
  });
});
