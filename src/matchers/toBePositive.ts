/**
 * Use `.toBePositive` when checking if a value is a positive `Number`.
 */
export function toBePositive(actual: unknown) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived, matcherHint } = this.utils;

  const pass = (isNumber(actual) || isBigInt(actual)) && isPositive(actual);

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

const isNumber = (value: any) => typeof value === 'number' && !isNaN(value) && isFinite(value);
const isBigInt = (value: any) => typeof value === 'bigint';
const isPositive = (value: any) => {
  if (typeof value === 'bigint') return value > 0n;
  return value > 0;
};
