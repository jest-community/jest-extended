import matcher from './';

expect.extend(matcher);

describe('.toBeArrayWithFloats', () => {
  test('passes for empty arrays', () => {
    expect([]).toBeArrayWithFloats([]);
  });

  test('passes for arrays with same floats with default precision', () => {
    expect([1.2, 2.45]).toBeArrayWithFloats([1.2, 2.45001]);
  });

  test('passes for arrays with floats rounded to same value with default precision', () => {
    expect([0.00011]).toBeArrayWithFloats([0.0001]);
  });

  test('passes for arrays with same floats with specified precision', () => {
    expect([1.014, 1.23456]).toBeArrayWithFloats([1.0104, 1.23112], 2);
  });
});

describe('.not.toBeArrayWithFloats', () => {
  test('passes for arrays with different floats', () => {
    expect([1.0]).not.toBeArrayWithFloats([1.0001]);
  });

  test('passes for arrays with different floats due to rounding', () => {
    expect([1.0]).not.toBeArrayWithFloats([1.00005]);
  });
});
