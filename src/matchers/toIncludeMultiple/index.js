import predicate from './predicate';

const passMessage = (utils, actual, expected) => () =>
  utils.matcherHint('.not.toIncludeMultiple') +
  '\n\n' +
  'Expected string to not contain all substrings: \n' +
  `  ${utils.printExpected(expected)}\n` +
  'Received: \n' +
  `  ${utils.printReceived(actual)}`;

const failMessage = (utils, actual, expected) => () =>
  utils.matcherHint('.toIncludeMultiple') +
  '\n\n' +
  'Expected string to contain all substrings: \n' +
  `  ${utils.printExpected(expected)}\n` +
  'Received:\n' +
  `  ${utils.printReceived(actual)}`;

export function toIncludeMultiple(actual, expected) {
  const pass = predicate(actual, expected);
  if (pass) {
    return { pass: true, message: passMessage(this.utils, actual, expected) };
  }

  return { pass: false, message: failMessage(this.utils, actual, expected) };
}
