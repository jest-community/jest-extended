import * as matcher from 'src/matchers/toBeEven';

expect.extend(matcher);

describe('.toBeEven', () => {
  test('passes when given even number', () => {
    expect(2).toBeEven();
  });

  test('passes when given even BigInt', () => {
    expect(BigInt(2)).toBeEven();
    expect(BigInt(0)).toBeEven();
    expect(BigInt(-4)).toBeEven();
  });

  test.each([[false], [true], [''], [1], [{}], [() => {}], [undefined], [null], [NaN]])(
    'fails when not given an even number',
    given => {
      expect(() => expect(given).toBeEven()).toThrowErrorMatchingSnapshot();
    },
  );

  test('fails when given odd BigInt', () => {
    expect(() => expect(BigInt(1)).toBeEven()).toThrowErrorMatchingSnapshot();
    expect(() => expect(BigInt(-3)).toBeEven()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeEven', () => {
  test('fails when given an even number', () => {
    expect(() => expect(2).not.toBeEven()).toThrowErrorMatchingSnapshot();
  });

  test('fails when given an even BigInt', () => {
    expect(() => expect(BigInt(2)).not.toBeEven()).toThrowErrorMatchingSnapshot();
  });

  test.each([[false], [true], [''], [1], [[]], [{}], [() => {}], [undefined], [null], [NaN]])(
    'passes when not given an even number: %s',
    given => {
      expect(given).not.toBeEven();
    },
  );

  test('passes when given odd BigInt', () => {
    expect(BigInt(1)).not.toBeEven();
    expect(BigInt(-3)).not.toBeEven();
  });
});
