import * as matcher from 'src/matchers/toBeInteger';

expect.extend(matcher);

describe('.toBeInteger', () => {
  test('passes when given integer', () => {
    expect(1).toBeInteger();
  });

  test('passes when given BigInt', () => {
    expect(42n).toBeInteger();
    expect(-123n).toBeInteger();
  });

  test('passes when given zero BigInt', () => {
    expect(0n).toBeInteger();
  });

  test('passes when given BigInt beyond the safe integer range', () => {
    expect(9007199254740993n).toBeInteger();
  });

  test('fails when given fraction', () => {
    expect(() => expect(1.5).toBeInteger()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeInteger', () => {
  test('passes when given fraction', () => {
    expect(1.5).not.toBeInteger();
  });

  test('fails when given integer', () => {
    expect(() => expect(1).not.toBeInteger()).toThrowErrorMatchingSnapshot();
  });

  test('fails when given BigInt', () => {
    expect(() => expect(42n).not.toBeInteger()).toThrowErrorMatchingSnapshot();
  });
});
