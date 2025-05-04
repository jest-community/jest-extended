export function toContainKey<E = unknown>(actual: unknown, expected: keyof E | string) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived, printExpected, matcherHint } = this.utils;

  const pass =
    typeof actual === 'object' &&
    actual !== null &&
    !Array.isArray(actual) &&
    actual.hasOwnProperty &&
    Object.prototype.hasOwnProperty.call(actual, expected);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toContainKey') +
          '\n\n' +
          'Expected object to not contain key:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toContainKey') +
          '\n\n' +
          'Expected object to contain key:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
