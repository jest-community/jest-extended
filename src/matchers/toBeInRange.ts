export function toBeInRange(actual: unknown[], min: number | bigint, max: number | bigint) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived, printExpected, matcherHint } = this.utils;

  const element = actual.find((option: any) => {
    // Handle BigInt comparisons
    if (typeof option === 'bigint' && typeof min === 'bigint' && typeof max === 'bigint') {
      return option < min || option >= max;
    }
    // Handle regular number comparisons
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
