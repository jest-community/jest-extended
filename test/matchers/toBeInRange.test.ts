import * as matcher from 'src/matchers/toBeInRange';

expect.extend(matcher);

describe('.toBeInRange', () => {
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
