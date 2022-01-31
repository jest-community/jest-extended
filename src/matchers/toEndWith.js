export function toEndWith(actual, expected) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toEndWith') +
    '\n\n' +
    'Expected string to not end with:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toEndWith') +
    '\n\n' +
    'Expected string to end with:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const pass = actual.endsWith(expected);

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
