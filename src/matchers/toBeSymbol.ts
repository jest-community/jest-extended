export function toBeSymbol(actual: unknown) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived, matcherHint } = this.utils;

  const pass = typeof actual === 'symbol';

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeSymbol', 'received', '') +
          '\n\n' +
          'Expected value to not be a symbol, received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeSymbol', 'received', '') +
          '\n\n' +
          'Expected to receive a symbol, received:\n' +
          `  ${printReceived(actual)}`,
  };
}
