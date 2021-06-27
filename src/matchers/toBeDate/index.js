import predicate from './predicate';

const passMessage = (utils, received) => () =>
  utils.matcherHint('.not.toBeDate', 'received', '') +
  '\n\n' +
  'Expected value to not be a date received:\n' +
  `  ${utils.printReceived(received)}`;

const failMessage = (utils, received) => () =>
  utils.matcherHint('.toBeDate', 'received', '') +
  '\n\n' +
  'Expected value to be a date received:\n' +
  `  ${utils.printReceived(received)}`;

export function toBeDate(expected) {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(this.utils, expected) };
  }

  return { pass: false, message: failMessage(this.utils, expected) };
}
