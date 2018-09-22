/*
#### .toBeTrue()

Use `.toBeTrue` when checking a value is equal (===) to `true`.
*/

test('is jest cool', () => {
  expect(isJestCool()).toBeTrue();
  expect(false).not.toBeTrue();
});
