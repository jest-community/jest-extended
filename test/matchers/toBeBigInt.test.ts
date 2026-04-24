import * as matcher from 'src/matchers/toBeBigInt';

expect.extend(matcher);

describe('.toBeBigInt', () => {
  test('passes when given bigint', () => {
    expect(BigInt(1)).toBeBigInt();
  });

  test('fails when given integer', () => {
    expect(() => expect(1).toBeBigInt()).toThrowErrorMatchingSnapshot();
  });

  test('fails when given fraction', () => {
    expect(() => expect(1.5).toBeBigInt()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeInteger', () => {
  test('passes when given integer', () => {
    expect(1).not.toBeBigInt();
  });

  test('passes when given fraction', () => {
    expect(1.5).not.toBeBigInt();
  });

  test('fails when given integer', () => {
    expect(() => expect(BigInt(1)).not.toBeBigInt()).toThrowErrorMatchingSnapshot();
  });
});
