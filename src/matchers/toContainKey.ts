export function toContainKey<E = unknown>(actual: unknown, expected: keyof E | string) {
  // @ts-expect-error OK to have implicit any for this
  const { printReceived, printExpected, matcherHint } = this.utils;

  if (typeof actual !== 'object' || actual === null) {
    throw new Error(
        matcherHint('.toContainKey', 'received', '') +
        '\n\n' +
        'Expected value to be of type object but received:\n' +
        `  ${printReceived(actual)}`,
    );
  }

  const pass = actual.hasOwnProperty && Object.prototype.hasOwnProperty.call(actual, expected);

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
