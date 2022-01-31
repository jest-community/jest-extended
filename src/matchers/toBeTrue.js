export function toBeTrue(actual) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toBeTrue', 'received', '') +
    '\n\n' +
    'Expected value to not be true received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeTrue', 'received', '') +
    '\n\n' +
    'Expected value to be true:\n' +
    `  ${printExpected(true)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const pass = actual === true;

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
