import predicate from './predicate';

const passMessage = (utils, actual, expected) => () =>
  utils.matcherHint('.not.toContainAllKeys') +
  '\n\n' +
  'Expected object to not contain all keys:\n' +
  `  ${utils.printExpected(expected)}\n` +
  'Received:\n' +
  `  ${utils.printReceived(Object.keys(actual))}`;

const failMessage = (utils, actual, expected) => () =>
  utils.matcherHint('.toContainAllKeys') +
  '\n\n' +
  'Expected object to contain all keys:\n' +
  `  ${utils.printExpected(expected)}\n` +
  'Received:\n' +
  `  ${utils.printReceived(Object.keys(actual))}`;

export function toContainAllKeys(actual, expected) {
  const pass = predicate(this.equals, actual, expected);
  if (pass) {
    return { pass: true, message: passMessage(this.utils, actual, expected) };
  }

  return { pass: false, message: failMessage(this.utils, actual, expected) };
}
