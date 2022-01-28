import predicate from './predicate';

const passMessage = (utils, received, before) => () =>
  utils.matcherHint('.not.toBeBeforeOrEqualTo', 'received', '') +
  '\n\n' +
  `Expected date to be before or equal to ${utils.printReceived(before)} but received:\n` +
  `  ${utils.printReceived(received)}`;

const failMessage = (utils, received, before) => () =>
  utils.matcherHint('.toBeBeforeOrEqualTo', 'received', '') +
  '\n\n' +
  `Expected date to be before or equal to ${utils.printReceived(before)} but received:\n` +
  `  ${utils.printReceived(received)}`;

export function toBeBeforeOrEqualTo(date, before) {
  const pass = predicate(date, before);
  if (pass) {
    return { pass: true, message: passMessage(this.utils, date, before) };
  }

  return { pass: false, message: failMessage(this.utils, date, before) };
}
