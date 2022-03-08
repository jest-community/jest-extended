import { getType } from 'jest-get-type';

export function toBeEmptyObject(actual) {
  const { printReceived, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toBeEmptyObject', 'received', '') +
    '\n\n' +
    'Expected value to not be an empty object, received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeEmptyObject', 'received', '') +
    '\n\n' +
    'Expected value to be an empty object, received:\n' +
    `  ${printReceived(actual)}`;

  const pass = getType(actual) === 'object' && Object.keys(actual).length === 0;

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
