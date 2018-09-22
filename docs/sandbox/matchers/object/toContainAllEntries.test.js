/*
#### .toContainAllEntries([[key, value]])

Use `.toContainAllEntries` when checking if an object only contains all of the provided entries.
*/

test('passes when object only contains all of the given entries', () => {
  const o = { a: 'foo', b: 'bar', c: 'baz' };
  expect(o).toContainAllEntries([['a', 'foo'], ['b', 'bar'], ['c', 'baz']]);
  expect(o).not.toContainAllEntries([['a', 'foo'], ['b', 'bar']]);
});
