export function toBeBefore(actual, expected) {
  const { matcherHint, printReceived } = this.utils;
  const passMessage = () =>
    matcherHint('.not.toBeBefore', 'received', '') +
    '\n\n' +
    `Expected date to be before ${printReceived(actual)} but received:\n` +
    `  ${printReceived(expected)}`;

  const failMessage = () =>
    matcherHint('.toBeBefore', 'received', '') +
    '\n\n' +
    `Expected date to be before ${printReceived(actual)} but received:\n` +
    `  ${printReceived(expected)}`;

  const pass = actual < expected;
  const message = pass ? passMessage : failMessage;

  return { pass, message };
}
