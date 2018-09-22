/*
#### .toBeEven()

Use `.toBeEven` when checking if a value is an even `Number`.
*/

test('passes when value is an even number', () => {
  expect(2).toBeEven();
  expect(1).not.toBeEven();
  expect(NaN).not.toBeEven();
});
