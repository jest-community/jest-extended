/*
#### .toBeNil()

Use `.toBeNil` when checking a value is `null` or `undefined`.
*/

test('passes when value is null or undefined', () => {
  expect(null).toBeNil();
  expect(undefined).toBeNil();
  expect(true).not.toBeNil();
});
