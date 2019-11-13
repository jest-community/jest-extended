import matcher from './';

expect.extend(matcher);

let isEven = el => el % 2 === 0;
let isOdd = el => el % 2 === 1;

describe('.toSatisfyAny', () => {
  test('passes when any value satisfies predicate', () => {
    expect([1, 2, 4, 6]).toSatisfyAny(isOdd);
    expect([2, 4, 6, 8]).toSatisfyAny(isEven);
    expect([11]).toSatisfyAny(isOdd);
    expect([10]).toSatisfyAny(isEven);
  });

  test('fails when all values do not satisfy the predicate', () => {
    expect(() => expect([1, 3, 7, 5]).toSatisfyAny(isEven)).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toSatisfyAny', () => {
  test('passes when all values do not satisfy the predicate', () => {
    expect([2, 4, 6, 8]).not.toSatisfyAny(isOdd);
    expect([1, 5, 3, 7, 9]).not.toSatisfyAny(isEven);
  });

  test('fails when any value satisfies predicate', () => {
    expect(() => expect([1, 2, 3, 4]).not.toSatisfyAny(isOdd)).toThrowErrorMatchingSnapshot();
  });
});
