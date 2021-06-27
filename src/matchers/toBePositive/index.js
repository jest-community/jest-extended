import predicate from './predicate';

const passMessage = (utils, received) => () =>
  utils.matcherHint('.not.toBePositive', 'received', '') +
  '\n\n' +
  'Expected value to not be positive received:\n' +
  `  ${utils.printReceived(received)}`;

const failMessage = (utils, received) => () =>
  utils.matcherHint('.toBePositive', 'received', '') +
  '\n\n' +
  'Expected value to be positive received:\n' +
  `  ${utils.printReceived(received)}`;

export function toBePositive(expected) {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(this.utils, expected) };
  }

  return { pass: false, message: failMessage(this.utils, expected) };
}
