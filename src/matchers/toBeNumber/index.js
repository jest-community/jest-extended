import predicate from './predicate';

const passMessage = (utils, received) => () =>
  utils.matcherHint('.not.toBeNumber', 'received', '') +
  '\n\n' +
  'Expected value to not be a number received:\n' +
  `  ${utils.printReceived(received)}`;

const failMessage = (utils, received) => () =>
  utils.matcherHint('.toBeNumber', 'received', '') +
  '\n\n' +
  'Expected value to be a number received:\n' +
  `  ${utils.printReceived(received)}`;

export function toBeNumber(expected) {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(this.utils, expected) };
  }

  return { pass: false, message: failMessage(this.utils, expected) };
}
