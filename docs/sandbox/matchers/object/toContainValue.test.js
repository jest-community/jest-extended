/*
#### .toContainValue(value)

Use `.toContainValue` when checking if an object contains the provided value.
*/

test('passes when object contains given value', () => {
  const o = { a: 'foo', b: 'bar', c: 'baz' };
  expect(o).toContainValue('foo');
  expect(o).toContainValue('bar');
  expect(o).not.toContainValue('qux');
});
