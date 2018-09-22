/*
#### .toBePositive()

Use `.toBePositive` when checking if a value is a positive `Number`.
*/

test('passes when value is a positive number', () => {
  expect(1).toBePositive();
  expect(Infinity).not.toBePositive();
  expect(-1).not.toBePositive();
  expect(NaN).not.toBePositive();
});
