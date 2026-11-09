import * as matcher from 'src/matchers/toBeNaN';

expect.extend(matcher);

const nonNaNValues: unknown[] = [
  'fsdafdsa',
  'NaN',
  '1',
  '',
  true,
  false,
  null,
  undefined,
  0n,
  1n,
  Symbol('NaN'),
  new Number(NaN),
  [],
  {},
  { valueOf: () => NaN },
  { toString: () => 'NaN' },
  {
    [Symbol.toPrimitive]: () => {
      throw new Error('Unexpected coercion');
    },
  },
];

describe('.toBeNaN', () => {
  test('passes when given NaN', () => {
    expect(NaN).toBeNaN();
  });

  test.each(nonNaNValues.map(actual => [actual]))('fails without coercing %p', actual => {
    expect(() => expect(actual).toBeNaN()).toThrow('Expected value to be NaN');
  });

  test('fails when given a number', () => {
    expect(() => expect(3).toBeNaN()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeNaN', () => {
  test.each(nonNaNValues.map(actual => [actual]))('passes without coercing %p', actual => {
    expect(actual).not.toBeNaN();
  });

  test.each([[0], [1], [300], [10.5], [-50]])('passes when given a number: %s', given => {
    expect(given).not.toBeNaN();
  });

  test('fails when given NaN', () => {
    expect(() => expect(NaN).not.toBeNaN()).toThrowErrorMatchingSnapshot();
  });
});
