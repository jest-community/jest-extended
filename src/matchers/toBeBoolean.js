export function toBeBoolean(actual) {
  const { matcherHint, printReceived } = this.utils;

  const passMessage =
    matcherHint('.not.toBeBoolean', 'received', '') +
    '\n\n' +
    'Expected value to not be of type boolean, received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeBoolean', 'received', '') +
    '\n\n' +
    'Expected value to be of type boolean, received:\n' +
    `  ${printReceived(actual)}`;

  const pass = typeof actual === 'boolean' || actual instanceof Boolean;

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
