import predicate from './predicate';

const passMessage = (utils, received, before) => () =>
  utils.matcherHint('.not.toBeAfterOrEqualTo', 'received', '') +
  '\n\n' +
  `Expected date to be after or equal to ${utils.printReceived(before)} but received:\n` +
  `  ${utils.printReceived(received)}`;

const failMessage = (utils, received, before) => () =>
  utils.matcherHint('.toBeAfterOrEqualTo', 'received', '') +
  '\n\n' +
  `Expected date to be after or equal to ${utils.printReceived(before)} but received:\n` +
  `  ${utils.printReceived(received)}`;

export function toBeAfterOrEqualTo(date, after) {
  const pass = predicate(date, after);
  if (pass) {
    return { pass: true, message: passMessage(this.utils, date, after) };
  }

  return { pass: false, message: failMessage(this.utils, date, after) };
}
