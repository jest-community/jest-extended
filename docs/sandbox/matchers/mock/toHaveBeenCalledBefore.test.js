/*
#### .toHaveBeenCalledBefore()

Use `.toHaveBeenCalledBefore` when checking if a `Mock` was called before another `Mock`.

_Note: Required Jest version >=23_
*/

it('calls mock1 before mock2', () => {
  const mock1 = jest.fn();
  const mock2 = jest.fn();

  mock1();
  mock2();
  mock1();

  expect(mock1).toHaveBeenCalledBefore(mock2);
});
