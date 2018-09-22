/*
#### .toSatisfyAll(predicate)

Use `.toSatisfyAll` when you want to use a custom matcher by supplying a predicate function that returns a `Boolean` for all values in an array.
*/

test('passes when all values in array pass given predicate', () => {
  const isOdd = el => el % 2 === 1;
  expect([1, 3, 5, 7]).toSatisfyAll(isOdd);
  expect([1, 3, 4, 5, 7]).not.toSatisfyAll(isOdd);
});
