/*
#### .toHaveBeenCalledAfter()

Use `.toHaveBeenCalledAfter` when checking if a `Mock` was called after another `Mock`.

_Note: Required Jest version >=23_
*/

it('calls mock1 after mock2', () => {
  const mock1 = jest.fn();
  const mock2 = jest.fn();

  mock2();
  mock1();
  mock2();

  expect(mock1).toHaveBeenCalledAfter(mock2);
});
