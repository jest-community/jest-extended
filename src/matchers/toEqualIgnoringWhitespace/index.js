import predicate from './predicate';
import { printExpected, printReceived } from './print-util';

const passMessage = (utils, expected) => () =>
  utils.matcherHint('.not.toEqualIgnoringWhitespace') +
  '\n\n' +
  'Expected values to not be equal while ignoring white-space (using ===):\n' +
  `Expected: not  ${utils.EXPECTED_COLOR(expected)}\n\n`;

const failMessage = (utils, diff) => () =>
  utils.matcherHint('.toEqualIgnoringWhitespace') +
  '\n\n' +
  'Expected values to be equal while ignoring white-space (using ===):\n' +
  `Expected:\n  ${printExpected(utils, diff)}\n\n` +
  `Received:\n  ${printReceived(utils, diff)}`;

export function toEqualIgnoringWhitespace(received, expected) {
  const { pass, diff } = predicate(received, expected);

  return {
    pass: pass,
    message: pass ? passMessage(this.utils, expected) : failMessage(this.utils, diff),
    actual: received,
  };
}
