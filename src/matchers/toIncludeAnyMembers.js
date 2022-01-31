import { contains } from '../utils';

export function toIncludeAnyMembers(actual, expected) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toIncludeAnyMembers') +
    '\n\n' +
    'Expected list to not include any of the following members:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toIncludeAnyMembers') +
    '\n\n' +
    'Expected list to include any of the following members:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const pass =
    Array.isArray(actual) && Array.isArray(expected) && expected.some(member => contains(this.equals, actual, member));

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
