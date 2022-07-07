import * as matcher from 'src/matchers/toBeWithinRange';

expect.extend(matcher);

describe('.toBeWithinRange', () => {
  test('passes when given array is within range', () => {
    expect([4, 5, 7, 9]).toBeWithinRange(4, 9);
  });

  test('fails when given array is not within a given range', () => {
    expect(() => expect([4, 5, 7, 9]).toBeWithinRange(4, 8)).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeWithinRange', () => {
  test('passes when given array is not within the given range', () => {
    expect([12, 13, 15, 17]).not.toBeWithinRange(4, 9);
  });

  test('fails when given array is within the given range', () => {
    expect(() => expect([4, 5, 7, 9]).not.toBeWithinRange(4, 9)).toThrowErrorMatchingSnapshot();
  });
});
