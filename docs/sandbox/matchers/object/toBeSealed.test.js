/*
#### .toBeSealed()

Use `.toBeSealed` when checking if an object is sealed.
*/

test('passes when value is sealed', () => {
  expect(Object.seal({})).toBeSealed();
  expect({}).not.toBeSealed();
  expect(1).not.toBeSealed();
});
