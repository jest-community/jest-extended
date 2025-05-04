export function toBePositive(actual: unknown) {
  // @ts-expect-error OK to have implicit any for this
  const { printReceived, matcherHint } = this.utils;

  const pass = isNumber(actual) && isPositive(actual);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBePositive', 'received', '') +
          '\n\n' +
          'Expected value to not be positive received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBePositive', 'received', '') +
          '\n\n' +
          'Expected value to be positive received:\n' +
          `  ${printReceived(actual)}`,
  };
}

const isNumber = (value: any) => !isNaN(parseInt(value));
const isPositive = (value: any) => value > 0;
