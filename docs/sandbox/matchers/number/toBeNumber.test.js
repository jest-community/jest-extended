/*
#### .toBeNumber()

Use `.toBeNumber` when checking if a value is a `Number`.
*/

test('passes when value is a number', () => {
  expect(1).toBeNumber();
  expect(NaN).toBeNumber();
  expect(Infinity).toBeNumber();
  expect(true).not.toBeNumber();
});
