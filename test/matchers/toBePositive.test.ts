import * as matcher from 'src/matchers/toBePositive';

expect.extend(matcher);

describe('.toBePositive', () => {
  test('passes when given a positive number', () => {
    expect(1).toBePositive();
  });

  test('passes when given a positive BigInt', () => {
    expect(1n).toBePositive();
  });

  test('fails when not given a positive number', () => {
    expect(() => expect(-1).toBePositive()).toThrowErrorMatchingSnapshot();
  });

  test('fails when not given a positive BigInt', () => {
    expect(() => expect(-1n).toBePositive()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBePositive', () => {
  test.each([[false], [''], [-1], [0], [{}], [[]], [() => {}], [undefined], [null], [NaN], [Infinity], [-1n], [0n]])(
    'passes when not given a positive number: %s',
    given => {
      expect(given).not.toBePositive();
    },
  );

  test('fails when given a positive number', () => {
    expect(() => expect(5).not.toBePositive()).toThrowErrorMatchingSnapshot();
  });

  test('fails when given a positive BigInt', () => {
    expect(() => expect(5n).not.toBePositive()).toThrowErrorMatchingSnapshot();
  });
});
