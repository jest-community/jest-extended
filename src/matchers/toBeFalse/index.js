import predicate from './predicate';

const passMessage = (utils, received) => () =>
  utils.matcherHint('.not.toBeFalse', 'received', '') +
  '\n\n' +
  'Expected value to not be false received:\n' +
  `  ${utils.printReceived(received)}`;

const failMessage = (utils, received) => () =>
  utils.matcherHint('.toBeFalse', 'received', '') +
  '\n\n' +
  'Expected value to be false:\n' +
  `  ${utils.printExpected(false)}\n` +
  'Received:\n' +
  `  ${utils.printReceived(received)}`;

export function toBeFalse(expected) {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(this.utils, expected) };
  }

  return { pass: false, message: failMessage(this.utils, expected) };
}
