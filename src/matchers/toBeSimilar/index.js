import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';
import predicate from './predicate';
import generateHints from './generateHints';

const passMessage = (received, expected, diff) => () =>
  matcherHint('.not.toBeSimilar') +
  '\n\n' +
  'Expected values to not be equal while ignoring whitespace (using ===):\n' +
  `  ${printExpected(expected)}\n\n` +
  'Received:\n' +
  `  ${printReceived(received)}\n\n` +
  'Hint:\n' +
  generateHints(diff);

const failMessage = (received, expected, diff) => () =>
  matcherHint('.toBeSimilar') +
  '\n\n' +
  'Expected values to be equal while ignoring whitespace (using ===):\n' +
  `  ${printExpected(expected)}\n\n` +
  'Received:\n' +
  `  ${printReceived(received)}\n\n` +
  'Hint:\n' +
  generateHints(diff);

export default {
  toBeSimilar(received, expected) {
    const { pass, diff } = predicate(received, expected);

    return {
      pass: pass,
      message: pass ? passMessage(received, expected, diff) : failMessage(received, expected, diff),
      actual: received
    };
  }
};
