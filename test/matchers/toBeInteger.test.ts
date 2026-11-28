import * as matcher from 'src/matchers/toBeInteger';

expect.extend(matcher);

const nonIntegers: unknown[] = [
  '1',
  '',
  true,
  false,
  null,
  undefined,
  NaN,
  Infinity,
  -Infinity,
  Symbol('integer'),
  new Number(1),
  Object(1n),
  [1],
  {},
  { valueOf: () => 1 },
  { toString: () => '1' },
  {
    [Symbol.toPrimitive]: () => {
      throw new Error('Unexpected coercion');
    },
  },
];

describe('.toBeInteger', () => {
  test.each(nonIntegers.map(actual => [actual]))('fails without coercing %p', actual => {
    expect(() => expect(actual).toBeInteger()).toThrow('Expected value to be an integer');
  });

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
  test.each(nonIntegers.map(actual => [actual]))('passes without coercing %p', actual => {
    expect(actual).not.toBeInteger();
  });

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
