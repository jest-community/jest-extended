/**
 * Use `.toBeInRange` when checking if an array has elements in range min (inclusive) and max (exclusive).
 *
 * @param min
 * @param max
 */
export function toBeInRange(actual: unknown[], min: number | bigint, max: number | bigint) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived, printExpected, matcherHint } = this.utils;

  const element = actual.find((option: any) => {
    if (typeof option === 'bigint' && typeof min === 'bigint' && typeof max === 'bigint') {
      return option < min || option >= max;
    }
    return option < min || option >= max;
  });

  const pass = element === undefined;

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeInRange') +
          '\n\n' +
          `Expected Array to not be in range ${printExpected(min)}, ${printExpected(max)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeInRange') +
          '\n\n' +
          `Expected: Array elements to be in range (${printExpected(min)}, ${printExpected(max)})\n` +
          `Received: Array element out of range ${printReceived(element)}`,
  };
}
