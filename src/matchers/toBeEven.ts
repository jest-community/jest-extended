export function toBeEven(actual: unknown) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived, matcherHint } = this.utils;

  const pass =
    (typeof actual === 'number' && !isNaN(actual) && actual % 2 === 0) ||
    (typeof actual === 'bigint' && actual % BigInt(2) === BigInt(0));

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeEven', 'received', '') +
          '\n\n' +
          'Expected value to not be an even number received:\n' +
          ` ${printReceived(actual)}`
        : matcherHint('.toBeEven', 'received', '') +
          '\n\n' +
          'Expected value to be an even number received:\n' +
          ` ${printReceived(actual)}`,
  };
}
