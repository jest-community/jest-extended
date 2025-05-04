export function toBeOdd(actual: unknown) {
  // @ts-expect-error OK to have implicit any for this
  const { printReceived, matcherHint } = this.utils;

  const pass = isNumber(actual) && isOdd(actual);

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

const isNumber = (expected: any) => !isNaN(parseInt(expected));
const isOdd = (expected: any) => expected % 2 === 1;
