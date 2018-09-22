/*
#### .toBeFrozen()

Use `.toBeFrozen` when checking if an object is frozen.
*/

test('passes when value is frozen', () => {
  expect(Object.frozen({})).toBeFrozen();
  expect({}).not.toBeFrozen();
  expect(1).not.toBeFrozen();
});
