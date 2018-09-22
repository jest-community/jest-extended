/*
#### .toContainValues([values])

Use `.toContainValues` when checking if an object contains all of the provided values.
*/

test('passes when object contains all of the given values', () => {
  const o = { a: 'foo', b: 'bar', c: 'baz' };
  expect(o).toContainValues(['foo']);
  expect(o).toContainValues(['baz', 'bar']);
  expect(o).not.toContainValues(['qux', 'foo']);
});
