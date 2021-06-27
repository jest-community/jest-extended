import predicate from './predicate';

const passMessage = (utils, actual, expected) => () =>
  utils.matcherHint('.not.toContainValues') +
  '\n\n' +
  'Expected object to not contain all values:\n' +
  `  ${utils.printExpected(expected)}\n` +
  'Received:\n' +
  `  ${utils.printReceived(actual)}`;

const failMessage = (utils, actual, expected) => () =>
  utils.matcherHint('.toContainValues') +
  '\n\n' +
  'Expected object to contain all values:\n' +
  `  ${utils.printExpected(expected)}\n` +
  'Received:\n' +
  `  ${utils.printReceived(actual)}`;

export function toContainValues(actual, expected) {
  const pass = predicate(this.equals, actual, expected);
  if (pass) {
    return { pass: true, message: passMessage(this.utils, actual, expected) };
  }

  return { pass: false, message: failMessage(this.utils, actual, expected) };
}
