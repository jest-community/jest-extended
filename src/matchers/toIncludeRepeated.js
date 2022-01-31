export function toIncludeRepeated(actual, expected, occurrences) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toIncludeRepeated') +
    '\n\n' +
    `Expected string to not include repeated ${occurrences} times:\n` +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toIncludeRepeated') +
    '\n\n' +
    `Expected string to include repeated ${occurrences} times:\n` +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const pass = (actual.match(new RegExp(expected, 'g')) || []).length === occurrences;

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
