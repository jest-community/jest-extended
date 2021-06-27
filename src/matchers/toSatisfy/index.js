const passMessage = (utils, received, expected) => () =>
  utils.matcherHint('.not.toSatisfy', 'received', '') +
  '\n\n' +
  'Expected value to not satisfy:\n' +
  `  ${utils.printExpected(expected)}\n` +
  'Received:\n' +
  `  ${utils.printReceived(received)}`;

const failMessage = (utils, received, expected) => () =>
  utils.matcherHint('.toSatisfy', 'received', '') +
  '\n\n' +
  'Expected value to satisfy:\n' +
  `  ${utils.printExpected(expected)}\n` +
  'Received:\n' +
  `  ${utils.printReceived(received)}`;

export function toSatisfy(actual, predicate) {
  const pass = predicate(actual);
  if (pass) {
    return { pass: true, message: passMessage(this.utils, actual, predicate) };
  }

  return { pass: false, message: failMessage(this.utils, actual, predicate) };
}
