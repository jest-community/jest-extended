import { getType } from 'jest-get-type';

export function toBeDate(actual) {
  const { matcherHint, printReceived } = this.utils;

  const passMessage =
    matcherHint('.not.toBeDate', 'received', '') +
    '\n\n' +
    'Expected value to not be a date received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeDate', 'received', '') +
    '\n\n' +
    'Expected value to be a date received:\n' +
    `  ${printReceived(actual)}`;

  const pass = getType(actual) === 'date' && !isNaN(actual);

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
