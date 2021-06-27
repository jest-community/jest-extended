import predicate from './predicate';

const passMessage = (utils, received) => () =>
  utils.matcherHint('.not.toBeString', 'received', '') +
  '\n\n' +
  'Expected value to not be of type string received:\n' +
  `  ${utils.printReceived(received)}`;

const failMessage = (utils, received) => () =>
  utils.matcherHint('.toBeString', 'received', '') +
  '\n\n' +
  'Expected value to be of type string:\n' +
  `  ${utils.printExpected('type of string')}\n` +
  'Received:\n' +
  `  ${utils.printReceived(typeof received)}`;

export function toBeString(expected) {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(this.utils, expected) };
  }

  return { pass: false, message: failMessage(this.utils, expected) };
}
