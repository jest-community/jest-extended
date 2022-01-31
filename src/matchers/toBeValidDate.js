import { getType } from 'jest-get-type';

export function toBeValidDate(actual) {
  const { printReceived, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toBeValidDate', 'received', '') +
    '\n\n' +
    'Expected value to not be a valid date received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeValidDate', 'received', '') +
    '\n\n' +
    'Expected value to be a valid date received:\n' +
    `  ${printReceived(actual)}`;

  const pass = getType(actual) === 'date' && !isNaN(actual) && !isNaN(actual.getTime());

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
