/*
#### .toBeFinite()

Use `.toBeFinite` when checking if a value is a `Number`, not `NaN` or `Infinity`.
*/

test('passes when value is a finite number', () => {
  expect(1).toBeFinite();
  expect(Infinity).not.toBeFinite();
  expect(NaN).not.toBeFinite();
});
