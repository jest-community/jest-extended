/*
#### .toBeValidDate()

Use `.toBeValidDate` when checking if a given `Date` object is valid.
*/

test('passes when Date is valid', () => {
  expect(new Date()).toBeValidDate();
  expect('01/01/2018').not.toBeValidDate();
  expect(new Date('01/01/2018')).toBeValidDate();
  expect(new Date('01/90/2018')).not.toBeValidDate();
  expect(undefined).not.toBeValidDate();
});
