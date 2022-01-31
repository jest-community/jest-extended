export function toStartWith(actual, expected) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toStartWith') +
    '\n\n' +
    'Expected string to not start with:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toStartWith') +
    '\n\n' +
    'Expected string to start with:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const pass = actual.startsWith(expected);

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
