export function toBeBefore(actual, expected) {
  const { matcherHint, printReceived } = this.utils;
  const passMessage = () =>
    matcherHint('.not.toBeBefore', 'received', '') +
    '\n\n' +
    `Expected date to be before ${printReceived(expected)} but received:\n` +
    `  ${printReceived(actual)}`;

  const failMessage = () =>
    matcherHint('.toBeBefore', 'received', '') +
    '\n\n' +
    `Expected date to be before ${printReceived(expected)} but received:\n` +
    `  ${printReceived(actual)}`;

  const pass = actual < expected;
  const message = pass ? passMessage : failMessage;

  return { pass, message };
}
