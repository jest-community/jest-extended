export function toIncludeMultiple(actual, expected) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toIncludeMultiple') +
    '\n\n' +
    'Expected string to not contain all substrings: \n' +
    `  ${printExpected(expected)}\n` +
    'Received: \n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toIncludeMultiple') +
    '\n\n' +
    'Expected string to contain all substrings: \n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const pass = expected.every(value => actual.includes(value));

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
