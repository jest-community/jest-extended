import predicate from './predicate';

const passMessage = (utils, received, before) => () =>
  utils.matcherHint('.not.toBeBefore', 'received', '') +
  '\n\n' +
  `Expected date to be before ${utils.printReceived(before)} but received:\n` +
  `  ${utils.printReceived(received)}`;

const failMessage = (utils, received, before) => () =>
  utils.matcherHint('.toBeBefore', 'received', '') +
  '\n\n' +
  `Expected date to be before ${utils.printReceived(before)} but received:\n` +
  `  ${utils.printReceived(received)}`;

export function toBeBefore(date, before) {
  const pass = predicate(date, before);
  if (pass) {
    return { pass: true, message: passMessage(this.utils, date, before) };
  }

  return { pass: false, message: failMessage(this.utils, date, before) };
}
