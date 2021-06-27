import predicate from './predicate';

const passMessage = (utils, actual, expected) => () =>
  utils.matcherHint('.not.toPartiallyContain') +
  '\n\n' +
  'Expected array not to partially contain:\n' +
  `  ${utils.printExpected(expected)}\n` +
  'Received:\n' +
  `  ${utils.printReceived(actual)}`;

const failMessage = (utils, actual, expected) => () =>
  utils.matcherHint('.toPartiallyContain') +
  '\n\n' +
  'Expected array to partially contain:\n' +
  `  ${utils.printExpected(expected)}\n` +
  'Received:\n' +
  `  ${utils.printReceived(actual)}`;

export function toPartiallyContain(actual, expected) {
  const pass = predicate(this.equals, actual, expected);
  if (pass) {
    return { pass: true, message: passMessage(this.utils, actual, expected) };
  }

  return { pass: false, message: failMessage(this.utils, actual, expected) };
}
