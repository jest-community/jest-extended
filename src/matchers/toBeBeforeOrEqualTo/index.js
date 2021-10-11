import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = (received, before) => () =>
  matcherHint('.not.toBeBeforeOrEqualTo', 'received', '') +
  '\n\n' +
  `Expected date to be before or equal to ${printReceived(before)} but received:\n` +
  `  ${printReceived(received)}`;

const failMessage = (received, before) => () =>
  matcherHint('.toBeBeforeOrEqualTo', 'received', '') +
  '\n\n' +
  `Expected date to be before or equal to ${printReceived(before)} but received:\n` +
  `  ${printReceived(received)}`;

export function toBeBeforeOrEqualTo(date, before) {
  const pass = predicate(date, before);
  if (pass) {
    return { pass: true, message: passMessage(date, before) };
  }

  return { pass: false, message: failMessage(date, before) };
}
