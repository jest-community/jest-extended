import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = (received, before) => () =>
  matcherHint('.not.toBeAfterOrEqualTo', 'received', '') +
  '\n\n' +
  `Expected date to be after or equal to ${printReceived(before)} but received:\n` +
  `  ${printReceived(received)}`;

const failMessage = (received, before) => () =>
  matcherHint('.toBeAfterOrEqualTo', 'received', '') +
  '\n\n' +
  `Expected date to be after or equal to ${printReceived(before)} but received:\n` +
  `  ${printReceived(received)}`;

export function toBeAfterOrEqualTo(date, after) {
  const pass = predicate(date, after);
  if (pass) {
    return { pass: true, message: passMessage(date, after) };
  }

  return { pass: false, message: failMessage(date, after) };
}
