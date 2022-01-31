export function toBeAfterOrEqualTo(actual, expected) {
  const { printReceived, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toBeAfterOrEqualTo', 'received', '') +
    '\n\n' +
    `Expected date to be after or equal to ${printReceived(expected)} but received:\n` +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeAfterOrEqualTo', 'received', '') +
    '\n\n' +
    `Expected date to be after or equal to ${printReceived(expected)} but received:\n` +
    `  ${printReceived(actual)}`;

  const pass = actual >= expected;

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
