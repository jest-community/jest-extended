/*
#### .toBeAfter(date)

Use `.toBeAfter` when checking if a date occurs after `date`.
*/

test('passes when input is after date', () => {
  expect(new Date('01/01/2019')).toBeAfter(new Date('01/01/2018'));
  expect('01/01/2018').not.toBeAfter(new Date('01/01/2019'));
});
