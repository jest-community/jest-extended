import * as matcher from 'src/matchers/toBeHexadecimal';

expect.extend(matcher);

describe('.toBeHexadecimal', () => {
  test('passes when given valid 6 digit hexadecimal', () => {
    expect('#ECECEC').toBeHexadecimal();
  });

  test('passes when given valid 3 digit hexadecimal', () => {
    expect('#000').toBeHexadecimal();
  });

  test('passes when called multiple times with the same value', () => {
    expect('#ECECEC').toBeHexadecimal();
    expect('#ECECEC').toBeHexadecimal();
    expect('#ECECEC').toBeHexadecimal();
  });

  test('fails when given non-string', () => {
    expect(() => expect(true).toBeHexadecimal()).toThrowErrorMatchingSnapshot();
  });

  test('fails when given hexadecimal followed by other text', () => {
    expect(() => expect('#fff garbage').toBeHexadecimal()).toThrowErrorMatchingSnapshot();
    expect(() => expect('#abcdef!!').toBeHexadecimal()).toThrowErrorMatchingSnapshot();
    expect(() => expect('#123456; color: red').toBeHexadecimal()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeHexadecimal', () => {
  test('passes when given positive number', () => {
    expect(1).not.toBeHexadecimal();
  });

  test('passes when given hexadecimal with the wrong number of digits', () => {
    expect('#ffff').not.toBeHexadecimal();
    expect('#fffffff').not.toBeHexadecimal();
  });

  test('fails when given valid hexadecimal', () => {
    expect(() => expect('#eeffee').not.toBeHexadecimal()).toThrowErrorMatchingSnapshot();
  });
});
