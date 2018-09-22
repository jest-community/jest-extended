/*
#### .toBeOdd()

Use `.toBeOdd` when checking if a value is an odd `Number`.
*/

test('passes when value is an odd number', () => {
  expect(1).toBeOdd();
  expect(2).not.toBeOdd();
  expect(NaN).not.toBeOdd();
});
