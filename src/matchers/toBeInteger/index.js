import predicate from './predicate';

const passMessage = (utils, received) => () =>
  utils.matcherHint('.not.toBeInteger', 'received', '') +
  '\n\n' +
  'Expected value to not be an integer received:\n' +
  `  ${utils.printReceived(received)}`;

const failMessage = (utils, received) => () =>
  utils.matcherHint('.toBeInteger', 'received', '') +
  '\n\n' +
  'Expected value to be an integer received:\n' +
  `  ${utils.printReceived(received)}`;

export function toBeInteger(expected) {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(this.utils, expected) };
  }

  return { pass: false, message: failMessage(this.utils, expected) };
}
