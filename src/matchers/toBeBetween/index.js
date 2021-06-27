import predicate from './predicate';

const passMessage = (utils, received, startDate, endDate) => () =>
  utils.matcherHint('.not.toBeBetween', 'received', '') +
  '\n\n' +
  `Expected date to be between ${utils.printReceived(startDate)} and ${utils.printReceived(endDate)} but received:\n` +
  `  ${utils.printReceived(received)}`;

const failMessage = (utils, received, startDate, endDate) => () =>
  utils.matcherHint('.toBeBetween', 'received', '') +
  '\n\n' +
  `Expected date to be between ${utils.printReceived(startDate)} and ${utils.printReceived(endDate)} but received:\n` +
  `  ${utils.printReceived(received)}`;

export function toBeBetween(date, startDate, endDate) {
  const pass = predicate(date, startDate, endDate);
  if (pass) {
    return { pass: true, message: passMessage(this.utils, date, startDate, endDate) };
  }

  return { pass: false, message: failMessage(this.utils, date, startDate, endDate) };
}
