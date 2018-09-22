/*
#### .toBeDate()

Use `.toBeDate` when checking if a value is a `Date`.
*/

test('passes when value is a date', () => {
  expect(new Date()).toBeDate();
  expect('01/01/2018').not.toBeDate();
  expect(new Date('01/01/2018')).toBeDate();
  expect(undefined).not.toBeDate();
});
