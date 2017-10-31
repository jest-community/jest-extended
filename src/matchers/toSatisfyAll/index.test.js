import matcher from './';

expect.extend(matcher);

let isEven = el => el % 2 === 0;
let isOdd = el => el % 2 === 1;

describe('.toSatisfyAll', () => {
  it('passes when all values satisfy predicate', () => {
    expect([1, 3, 5, 7]).toSatisfyAll(isOdd);
    expect([2, 4, 6, 8]).toSatisfyAll(isEven);
    expect([11]).toSatisfyAll(isOdd);
    expect([10]).toSatisfyAll(isEven);
  });

  it('fails when any value does not satisfy the predicate', () => {
    expect(() => expect([1, 3, 4, 5]).toSatisfyAll(isOdd)).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toSatisfyAll', () => {
  it('passes when any value does not satisfy the predicate', () => {
    expect([1, 3, 4, 5]).not.toSatisfyAll(isOdd);
    expect([8, 6, 3, 1, 2]).not.toSatisfyAll(isEven);
  });

  it('fails when all values satisfy predicate', () => {
    expect(() => expect([1, 3, 5, 7]).not.toSatisfyAll(isOdd)).toThrowErrorMatchingSnapshot();
  });
});
