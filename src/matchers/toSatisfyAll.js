export function toSatisfyAll(actual, expected) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const pass = actual.every(expected);
  const failingElement = pass ? actual.find(expected) : actual.find(a => !expected(a));

  const passMessage =
    matcherHint('.not.toSatisfyAll') +
    '\n\n' +
    'Expected array to not satisfy predicate for all values:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}\n` +
    'Failed on:\n' +
    `  ${printReceived(failingElement)}`;

  const failMessage =
    matcherHint('.toSatisfyAll') +
    '\n\n' +
    'Expected array to satisfy predicate for all values:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}\n` +
    'Failed on:\n' +
    `  ${printReceived(failingElement)}`;

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
