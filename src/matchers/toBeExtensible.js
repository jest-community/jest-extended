export function toBeExtensible(actual) {
  const { matcherHint, printExpected, printReceived } = this.utils;

  const passMessage =
    matcherHint('.not.toBeExtensible', 'received', '') +
    '\n\n' +
    'Expected value to not be extensible received:\n' +
    `  ${printExpected(actual)}\n`;

  const failMessage =
    matcherHint('.toBeExtensible', 'received', '') +
    '\n\n' +
    'Expected value to be extensible received:\n' +
    `  ${printReceived(actual)}`;

  const pass = Object.isExtensible(actual);
  return {
    pass,
    message: () => (pass ? passMessage : failMessage),
  };
}
