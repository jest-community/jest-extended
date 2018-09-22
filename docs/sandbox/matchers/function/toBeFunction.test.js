/*
#### .toBeFunction()

Use `.toBeFunction` when checking if a value is a `Function`.
*/

test('passes when value is a function', () => {
  function noop() {}
  expect(() => {}).toBeFunction();
  expect(function() {}).not.toBeFunction();
  expect(noop).toBeFunction();
  expect(true).not.toBeFunction();
});
