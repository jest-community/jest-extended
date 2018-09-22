/*
#### .toContainAllKeys([keys])

Use `.toContainAllKeys` when checking if an object only contains all of the provided keys.
*/

test('passes when object only contains all keys', () => {
  const o = { a: 'hello', b: 'world' };
  expect(o).toContainAllKeys(['a', 'b']);
  expect(o).toContainAllKeys(['b', 'a']);
  expect(o).not.toContainAllKeys(['b']);
});
