export function toBeArray(expected) {
  const { matcherHint, printReceived } = this.utils;

  const passMessage =
    matcherHint('.not.toBeArray', 'received', '') +
    '\n\n' +
    'Expected value to not be an array received:\n' +
    `  ${printReceived(expected)}`;

  const failMessage =
    matcherHint('.toBeArray', 'received', '') +
    '\n\n' +
    'Expected value to be an array received:\n' +
    `  ${printReceived(expected)}`;

  const pass = Array.isArray(expected);

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
