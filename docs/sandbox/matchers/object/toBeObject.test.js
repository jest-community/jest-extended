/*
#### .toBeObject()

Use `.toBeObject` when checking if a value is an `Object`.
*/

test('passes when value is an object', () => {
  expect({}).toBeObject();
  expect({ a: 'hello' }).toBeObject();
  expect(true).not.toBeObject();
});
