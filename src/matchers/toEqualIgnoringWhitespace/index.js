import { EXPECTED_COLOR, matcherHint } from 'jest-matcher-utils';
import predicate from './predicate';
import { printExpected, printReceived } from './print-util';

const passMessage = expected => () =>
  matcherHint('.not.toEqualIgnoringWhitespace') +
  '\n\n' +
  'Expected values to not be equal while ignoring white-space (using ===):\n' +
  `Expected: not  ${EXPECTED_COLOR(expected)}\n\n`;

const failMessage = diff => () =>
  matcherHint('.toEqualIgnoringWhitespace') +
  '\n\n' +
  'Expected values to be equal while ignoring white-space (using ===):\n' +
  `Expected:\n  ${printExpected(diff)}\n\n` +
  `Received:\n  ${printReceived(diff)}`;

export function toEqualIgnoringWhitespace(received, expected) {
  const { pass, diff } = predicate(received, expected);

  return {
    pass: pass,
    message: pass ? passMessage(expected) : failMessage(diff),
    actual: received,
  };
}
