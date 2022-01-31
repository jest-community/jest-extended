import { determinePropertyMessage } from '../utils';

export function toBeArrayOfSize(actual, expected) {
  const { printExpected, printReceived, matcherHint } = this.utils;

  const passMessage = () =>
    `${matcherHint('.not.toBeArrayOfSize')}

Expected value to not be an array of size:
  ${printExpected(expected)}
Received:
  value: ${printReceived(actual)}
  length: ${printReceived(determinePropertyMessage(actual, 'length'))}`;

  const failMessage = () =>
    `${matcherHint('.toBeArrayOfSize')}

Expected value to be an array of size:
  ${printExpected(expected)}
Received:
  value: ${printReceived(actual)}
  length: ${printReceived(determinePropertyMessage(actual, 'length'))}`;

  const pass = Array.isArray(actual) && actual.length === expected;
  const message = pass ? passMessage : failMessage;

  return { pass, message };
}
