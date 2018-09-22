/*
#### .toBeBefore(date)

Use `.toBeBefore` when checking if a date occurs before `date`.
*/

test('passes when input is before date', () => {
  expect(new Date('01/01/2018')).toBeBefore(new Date('01/01/2019'));
  expect('01/01/2019').not.toBeBefore(new Date('01/01/2018'));
});
