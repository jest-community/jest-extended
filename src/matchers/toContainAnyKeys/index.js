import predicate from './predicate';

const passMessage = (utils, actual, expected) => () =>
  utils.matcherHint('.not.toContainAnyKeys') +
  '\n\n' +
  'Expected object not to contain any of the following keys:\n' +
  `  ${utils.printExpected(expected)}\n` +
  'Received:\n' +
  `  ${utils.printReceived(actual)}`;

const failMessage = (utils, actual, expected) => () =>
  utils.matcherHint('.toContainValue') +
  '\n\n' +
  'Expected object to contain any of the following keys:\n' +
  `  ${utils.printExpected(expected)}\n` +
  'Received:\n' +
  `  ${utils.printReceived(actual)}`;

export function toContainAnyKeys(actual, expected) {
  const pass = predicate(actual, expected);

  return {
    pass: pass,
    message: pass ? passMessage(this.utils, actual, expected) : failMessage(this.utils, actual, expected),
  };
}
