/*
#### .toBeNegative()

Use `.toBeNegative` when checking if a value is a negative `Number`.
*/

test('passes when value is a negative number', () => {
  expect(-1).toBeNegative();
  expect(-Infinity).not.toBeNegative();
  expect(1).not.toBeNegative();
  expect(NaN).not.toBeNegative();
});
