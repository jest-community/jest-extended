import predicate from './predicate';

const passMessage = (utils, received, after) => () =>
  utils.matcherHint('.not.toBeAfter', 'received', '') +
  '\n\n' +
  `Expected date to be after ${utils.printReceived(after)} but received:\n` +
  `  ${utils.printReceived(received)}`;

const failMessage = (utils, received, after) => () =>
  utils.matcherHint('.toBeAfter', 'received', '') +
  '\n\n' +
  `Expected date to be after ${utils.printReceived(after)} but received:\n` +
  `  ${utils.printReceived(received)}`;

export function toBeAfter(date, after) {
  const pass = predicate(date, after);
  if (pass) {
    return { pass: true, message: passMessage(this.utils, date, after) };
  }

  return { pass: false, message: failMessage(this.utils, date, after) };
}
