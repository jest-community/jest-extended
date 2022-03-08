import { containsEntry } from '../utils';

export function toIncludeAllPartialMembers(actual, expected) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toIncludeAllPartialMembers') +
    '\n\n' +
    'Expected list to not have all of the following partial members:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toIncludeAllPartialMembers') +
    '\n\n' +
    'Expected list to have all of the following partial members:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const pass =
    Array.isArray(actual) &&
    Array.isArray(expected) &&
    expected.every(partial =>
      actual.some(value => Object.entries(partial).every(entry => containsEntry(this.equals, value, entry))),
    );

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
