import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = (received, startDate, endDate) => () =>
  matcherHint('.not.toBeBetween', 'received', '') +
  '\n\n' +
  `Expected date to be between ${printReceived(startDate)} and ${printReceived(endDate)} but received:\n` +
  `  ${printReceived(received)}`;

const failMessage = (received, startDate, endDate) => () =>
  matcherHint('.toBeBetween', 'received', '') +
  '\n\n' +
  `Expected date to be between ${printReceived(startDate)} and ${printReceived(endDate)} but received:\n` +
  `  ${printReceived(received)}`;

export function toBeBetween(date, startDate, endDate) {
  const pass = predicate(date, startDate, endDate);
  if (pass) {
    return { pass: true, message: passMessage(date, startDate, endDate) };
  }

  return { pass: false, message: failMessage(date, startDate, endDate) };
}
