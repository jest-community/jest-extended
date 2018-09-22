/*
#### .toBeHexadecimal(string)

Use `.toBeHexadecimal` when checking if a value is a valid HTML hexadecimal color.
*/

test('passes when value is a valid hexadecimal', () => {
  expect('#abc123').toBeHexadecimal();
  expect('#FFF').toBeHexadecimal();
  expect('#000000').toBeHexadecimal();
  expect('#123ffg').not.toBeHexadecimal();
});
