import { matcherHint } from 'jest-matcher-utils';
import predicate from './predicate';
import { printExpected, printReceived } from './print-util';

const passMessage = diff => () =>
  matcherHint('.not.toEqualIgnoringWhitespaces') +
  '\n\n' +
  'Expected values to not be equal while ignoring whitespace (using ===):\n' +
  `Expected:\n  ${printExpected(diff)}\n\n` +
  `Received:\n  ${printReceived(diff)}`;

const failMessage = diff => () =>
  matcherHint('.toEqualIgnoringWhitespaces') +
  '\n\n' +
  'Expected values to be equal while ignoring whitespace (using ===):\n' +
  `Expected:\n  ${printExpected(diff)}\n\n` +
  `Received:\n  ${printReceived(diff)}`;

export function toEqualIgnoringWhitespaces(received, expected) {
  const { pass, diff } = predicate(received, expected);

  return {
    pass: pass,
    message: pass ? passMessage(diff) : failMessage(diff),
    actual: received,
  };
}
