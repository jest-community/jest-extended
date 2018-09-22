/*
#### .toBeArrayOfSize()

Use `.toBeArrayOfSize` when checking if a value is an `Array` of size x.
*/

test('passes when value is an array', () => {
  expect([]).toBeArrayOfSize(0);
  expect([1]).toBeArrayOfSize(1);
  expect(true).not.toBeArrayOfSize(1);
});
