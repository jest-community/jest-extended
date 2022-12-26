export function toSatisfyAny(actual, expected) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const pass = actual.some(expected);
  const failingElement = pass ? actual.find(expected) : actual.find(a => !expected(a));

  const passMessage =
    matcherHint('.not.toSatisfyAny') +
    '\n\n' +
    'Expected array to not satisfy predicate for any value:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}\n` +
    'Failed on:\n' +
    `  ${printReceived(failingElement)}`;

  const failMessage =
    matcherHint('.toSatisfyAny') +
    '\n\n' +
    'Expected array to satisfy predicate for any values:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}\n` +
    'Failed on:\n' +
    `  ${printReceived(failingElement)}`;

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
