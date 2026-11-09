export function toBeInRange(actual: unknown[], min: number | bigint, max: number | bigint) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived, printExpected, matcherHint } = this.utils;

  const invalidIndex = actual.findIndex(
    option => !((typeof option === 'number' || typeof option === 'bigint') && option >= min && option < max),
  );

  const pass = invalidIndex === -1;

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
          `Received: Array element out of range ${printReceived(actual[invalidIndex])}`,
  };
}
