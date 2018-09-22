/*
#### .toContainAnyValues([values])

Use `.toContainAnyValues` when checking if an object contains at least one of the provided values.
*/

test('passes when object contains at least one of the given values', () => {
  const o = { a: 'foo', b: 'bar', c: 'baz' };
  expect(o).toContainAnyValues(['qux', 'foo']);
  expect(o).toContainAnyValues(['qux', 'bar']);
  expect(o).toContainAnyValues(['qux', 'baz']);
  expect(o).not.toContainAnyValues(['qux']);
});
