export function toBeTrimmed(actual) {
  const { printReceived, matcherHint } = this.utils;

  const pass = actual.trim() === actual;

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeTrimmed', 'received', '') +
          '\n\n' +
          'Expected non-trimmed value, received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeTrimmed', 'received', '') +
          '\n\n' +
          'Expected value to be trimmed, received:\n' +
          `  ${printReceived(actual)}`,
  };
}
