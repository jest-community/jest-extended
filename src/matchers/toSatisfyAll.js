export function toSatisfyAll(actual, expected) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toSatisfyAll') +
    '\n\n' +
    'Expected array to not satisfy predicate for all values:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toSatisfyAll') +
    '\n\n' +
    'Expected array to satisfy predicate for all values:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const pass = actual.every(expected);

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
