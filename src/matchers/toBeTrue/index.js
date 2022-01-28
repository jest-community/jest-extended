import predicate from './predicate';

const passMessage = (utils, received) => () =>
  utils.matcherHint('.not.toBeTrue', 'received', '') +
  '\n\n' +
  'Expected value to not be true received:\n' +
  `  ${utils.printReceived(received)}`;

const failMessage = (utils, received) => () =>
  utils.matcherHint('.toBeTrue', 'received', '') +
  '\n\n' +
  'Expected value to be true:\n' +
  `  ${utils.printExpected(true)}\n` +
  'Received:\n' +
  `  ${utils.printReceived(received)}`;

export function toBeTrue(expected) {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(this.utils, expected) };
  }

  return { pass: false, message: failMessage(this.utils, expected) };
}
