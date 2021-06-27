import predicate from './predicate';

const passMessage = (utils, actual, expected) => () =>
  utils.matcherHint('.not.toContainAllEntries') +
  '\n\n' +
  'Expected object to not only contain all of the given entries:\n' +
  `  ${utils.printExpected(expected)}\n` +
  'Received:\n' +
  `  ${utils.printReceived(actual)}`;

const failMessage = (utils, actual, expected) => () =>
  utils.matcherHint('.toContainAllEntries') +
  '\n\n' +
  'Expected object to only contain all of the given entries:\n' +
  `  ${utils.printExpected(expected)}\n` +
  'Received:\n' +
  `  ${utils.printReceived(actual)}`;

export function toContainAllEntries(actual, expected) {
  const pass = predicate(this.equals, actual, expected);
  if (pass) {
    return { pass: true, message: passMessage(this.utils, actual, expected) };
  }

  return { pass: false, message: failMessage(this.utils, actual, expected) };
}
