export function toContainKey(actual, expected) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toContainKey') +
    '\n\n' +
    'Expected object to not contain key:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toContainKey') +
    '\n\n' +
    'Expected object to contain key:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const pass = actual.hasOwnProperty && Object.prototype.hasOwnProperty.call(actual, expected);

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
