export function toBeTrue(actual: unknown) {
  // @ts-expect-error OK to have implicit any for this
  const { printReceived, printExpected, matcherHint } = this.utils;

  const pass = actual === true;

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeTrue', 'received', '') +
          '\n\n' +
          'Expected value to not be true received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeTrue', 'received', '') +
          '\n\n' +
          'Expected value to be true:\n' +
          `  ${printExpected(true)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
