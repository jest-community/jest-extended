import * as matcher from 'src/matchers/toSatisfy';

expect.extend(matcher);

describe('.toSatisfy', () => {
  const is2 = (n: number) => n === 2;

  test('passes when given a function that returns true', () => {
    expect(2).toSatisfy(is2);
  });

  test('fails when given function that returns false', () => {
    expect(() => expect(3).toSatisfy(is2)).toThrowErrorMatchingSnapshot();
  });

  test('fails when expected is not a function', () => {
    // @ts-expect-error testing invalid input
    expect(() => expect(1).toSatisfy('not a function')).toThrow(
      'Expected predicate to be a function but instead "not a function" was found',
    );
  });
});

describe('.not.toSatisfy', () => {
  const isTrue = (a: boolean) => a;

  test('passes when given a function that returns false', () => {
    expect(false).not.toSatisfy(isTrue);
  });

  test('fails when given a function that returns true', () => {
    expect(() => expect(true).not.toSatisfy(isTrue)).toThrowErrorMatchingSnapshot();
  });
});
