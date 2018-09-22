/*
#### .toBeFalse()

Use `.toBeFalse` when checking a value is equal (===) to `false`.
*/

test('returns false', () => {
  expect(false).toBeFalse();
  expect(true).not.toBeFalse();
});
