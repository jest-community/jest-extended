import * as matcher from 'src/matchers/toBeInRange';

expect.extend(matcher);

const invalidElements: unknown[] = [
  '4',
  '',
  true,
  false,
  null,
  undefined,
  NaN,
  Symbol('range'),
  new Number(4),
  Object(4n),
  [4],
  {},
  { valueOf: () => 4 },
  {
    [Symbol.toPrimitive]: () => {
      throw new Error('Unexpected coercion');
    },
  },
];

describe('.toBeInRange', () => {
  test.each(invalidElements.map(actual => [actual]))('fails without coercing array element %p', actual => {
    expect(() => expect([1, actual, 5]).toBeInRange(0, 10)).toThrow('Array element out of range');
  });

  test('reports undefined as the invalid element', () => {
    expect(() => expect([1, undefined, 5]).toBeInRange(0, 10)).toThrowErrorMatchingSnapshot();
  });

  test('fails when given a sparse array', () => {
    expect(() => expect(new Array(1)).toBeInRange(0, 10)).toThrow('Array element out of range');
  });

  test('passes when given an empty array', () => {
    expect([]).toBeInRange(0, 10);
  });

  test('passes when given mixed Number and BigInt values', () => {
    expect([0, 1n, 9]).toBeInRange(0n, 10);
  });

  test('compares large BigInts without losing precision', () => {
    expect([9007199254740993n]).toBeInRange(9007199254740992, 9007199254740994n);
    expect(() => expect([9007199254740993n]).toBeInRange(9007199254740992, 9007199254740993n)).toThrow(
      'Array element out of range',
    );
  });

  test.each([
    [NaN, 10],
    [0, NaN],
  ])('fails when a bound is NaN: %p, %p', (min, max) => {
    expect(() => expect([4]).toBeInRange(min, max)).toThrow('Array element out of range');
  });

  test('passes when given array is in range', () => {
    expect([4, 5, 7, 9]).toBeInRange(4, 10);
  });

  test('passes when given BigInt array is in range', () => {
    expect([4n, 5n, 7n, 9n]).toBeInRange(4n, 10n);
  });

  test('fails when given array is not in a given range', () => {
    expect(() => expect([4, 5, 7, 9]).toBeInRange(4, 8)).toThrowErrorMatchingSnapshot();
  });

  test('fails when given BigInt array is not in a given range', () => {
    expect(() => expect([4n, 5n, 7n, 9n]).toBeInRange(4n, 8n)).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeInRange', () => {
  test.each(invalidElements.map(actual => [actual]))('passes without coercing array element %p', actual => {
    expect([1, actual, 5]).not.toBeInRange(0, 10);
  });

  test('passes when given a sparse array', () => {
    expect(new Array(1)).not.toBeInRange(0, 10);
  });

  test('fails when given an empty array', () => {
    expect(() => expect([]).not.toBeInRange(0, 10)).toThrow('Expected Array to not be in range');
  });

  test('passes when given array is not in the given range', () => {
    expect([12, 13, 15, 17]).not.toBeInRange(4, 9);
  });

  test('passes when given BigInt array is not in the given range', () => {
    expect([12n, 13n, 15n, 17n]).not.toBeInRange(4n, 9n);
  });

  test('fails when given array is in the given range', () => {
    expect(() => expect([4, 5, 7, 9]).not.toBeInRange(4, 10)).toThrowErrorMatchingSnapshot();
  });

  test('fails when given BigInt array is in the given range', () => {
    expect(() => expect([4n, 5n, 7n, 9n]).not.toBeInRange(4n, 10n)).toThrowErrorMatchingSnapshot();
  });
});
