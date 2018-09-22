/*
#### .toSatisfy(predicate)

Use `.toSatisfy` when you want to use a custom matcher by supplying a predicate function that returns a `Boolean`.
*/

test('passes when value passes given predicate', () => {
  const greaterThanOneButNotThree = n => n > 1 && n !== 3;
  expect(100).toSatisfy(greaterThanOneButNotThree);
  expect(0).not.toSatisfy(greaterThanOneButNotThree);
  expect(3).not.toSatisfy(greaterThanOneButNotThree);
});
