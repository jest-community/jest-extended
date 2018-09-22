/*
#### .toBeWithin(start, end)

Use `.toBeWithin` when checking if a number is in between the given bounds of: start (inclusive) and end (exclusive).
*/

test('passes when number is within given bounds', () => {
  expect(1).toBeWithin(1, 3);
  expect(2).toBeWithin(1, 3);
  expect(3).not.toBeWithin(1, 3);
});
