/*
#### .toBeNaN()

Use `.toBeNaN` when checking a value is `NaN`.
*/

test('passes when value is NaN', () => {
  expect(NaN).toBeNaN();
  expect(1).not.toBeNaN();
});
