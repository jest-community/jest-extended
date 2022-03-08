export function toBeBeforeOrEqualTo(actual, expected) {
  const { matcherHint, printReceived } = this.utils;

  const passMessage =
    matcherHint('.not.toBeBeforeOrEqualTo', 'received', '') +
    '\n\n' +
    `Expected date to be before or equal to ${printReceived(expected)} but received:\n` +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeBeforeOrEqualTo', 'received', '') +
    '\n\n' +
    `Expected date to be before or equal to ${printReceived(expected)} but received:\n` +
    `  ${printReceived(actual)}`;

  const pass = actual <= expected;

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
