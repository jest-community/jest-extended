import { getType } from 'jest-get-type';

export function toBeObject(actual) {
  const { printReceived, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toBeObject', 'received', '') +
    '\n\n' +
    'Expected value to not be an object, received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeObject', 'received', '') +
    '\n\n' +
    'Expected value to be an object, received:\n' +
    `  ${printReceived(actual)}`;

  const pass = getType(actual) === 'object';

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
