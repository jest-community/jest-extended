export function toEndWith(actual: unknown, expected: string) {
  // @ts-expect-error OK to have implicit any for this
  const { printReceived, printExpected, matcherHint } = this.utils;

  const pass = typeof actual === 'string' && actual.endsWith(expected);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toEndWith') +
          '\n\n' +
          'Expected string to not end with:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toEndWith') +
          '\n\n' +
          'Expected string to end with:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
