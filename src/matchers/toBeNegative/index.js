import predicate from './predicate';

const passMessage = (utils, received) => () =>
  utils.matcherHint('.not.toBeNegative', 'received', '') +
  '\n\n' +
  'Expected value to not be a negative number received:\n' +
  `  ${utils.printReceived(received)}`;

const failMessage = (utils, received) => () =>
  utils.matcherHint('.toBeNegative', 'received', '') +
  '\n\n' +
  'Expected value to be a negative number received:\n' +
  `  ${utils.printReceived(received)}`;

export function toBeNegative(expected) {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(this.utils, expected) };
  }

  return { pass: false, message: failMessage(this.utils, expected) };
}
