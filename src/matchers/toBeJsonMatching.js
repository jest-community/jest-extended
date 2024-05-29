import { matchesObject, tryParseJSON } from '../utils';

export function toBeJsonMatching(actual, expected) {
  const { printExpected, printReceived, matcherHint } = this.utils;

  const parsed = tryParseJSON(actual);
  const isValidJSON = typeof parsed !== 'undefined';

  const passMessage =
    `${matcherHint('.not.toBeJsonMatching')}\n\n` +
    `Expected input to not be a JSON string containing:\n  ${printExpected(expected)}\n` +
    `${isValidJSON ? `Received:\n  ${printReceived(parsed)}` : `Received invalid JSON:\n  ${printReceived(actual)}`}`;

  const failMessage =
    `${matcherHint('.toBeJsonMatching')}\n\n` +
    `Expected input to be a JSON string containing:\n  ${printExpected(expected)}\n` +
    `${isValidJSON ? `Received:\n  ${printReceived(parsed)}` : `Received invalid JSON:\n  ${printReceived(actual)}`}`;

  const pass =
    typeof actual === 'string' &&
    typeof tryParseJSON(actual) !== 'undefined' &&
    matchesObject(this.equals, tryParseJSON(actual), expected);

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
