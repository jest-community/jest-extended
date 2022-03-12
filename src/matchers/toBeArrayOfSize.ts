import { determinePropertyMessage } from '../utils';

interface CustomMatchers<R = unknown> {
  toBeArrayOfSize(x: number): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toBeArrayOfSize(
  this: jest.MatcherContext,
  actual: unknown,
  expected: number,
): jest.CustomMatcherResult {
  const { printExpected, printReceived, matcherHint } = this.utils;

  const passMessage = `${matcherHint('.not.toBeArrayOfSize')}

Expected value to not be an array of size:
  ${printExpected(expected)}
Received:
  value: ${printReceived(actual)}
  length: ${printReceived(determinePropertyMessage(actual, 'length'))}`;

  const failMessage = `${matcherHint('.toBeArrayOfSize')}

Expected value to be an array of size:
  ${printExpected(expected)}
Received:
  value: ${printReceived(actual)}
  length: ${printReceived(determinePropertyMessage(actual, 'length'))}`;

  const pass = Array.isArray(actual) && actual.length === expected;

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
