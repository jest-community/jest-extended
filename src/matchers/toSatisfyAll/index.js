import predicate from './predicate';

const passMessage = (utils, actual, expected) => () =>
  utils.matcherHint('.not.toSatisfyAll') +
  '\n\n' +
  'Expected array to not satisfy predicate for all values:\n' +
  `  ${utils.printExpected(expected)}\n` +
  'Received:\n' +
  `  ${utils.printReceived(actual)}`;

const failMessage = (utils, actual, expected) => () =>
  utils.matcherHint('.toSatisfyAll') +
  '\n\n' +
  'Expected array to satisfy predicate for all values:\n' +
  `  ${utils.printExpected(expected)}\n` +
  'Received:\n' +
  `  ${utils.printReceived(actual)}`;

export function toSatisfyAll(actual, expected) {
  const pass = predicate(actual, expected);
  if (pass) {
    return { pass: true, message: passMessage(this.utils, actual, expected) };
  }

  return { pass: false, message: failMessage(this.utils, actual, expected) };
}
