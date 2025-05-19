export function toBeOdd(actual: unknown) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived, matcherHint } = this.utils;

  const pass = (isNumber(actual) || isBigInt(actual)) && isOdd(actual);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeOdd', 'received', '') +
          '\n\n' +
          'Expected value to not be odd received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeOdd', 'received', '') +
          '\n\n' +
          'Expected value to be odd received:\n' +
          `  ${printReceived(actual)}`,
  };
}

const isNumber = (expected: any) => typeof expected === 'number' && Number.isFinite(expected);
const isBigInt = (expected: any) => typeof expected === 'bigint';
const isOdd = (expected: any) => {
  if (isBigInt(expected)) return expected % 2n === 1n || expected % 2n === -1n;
  return Math.abs(expected % 2) === 1;
};
