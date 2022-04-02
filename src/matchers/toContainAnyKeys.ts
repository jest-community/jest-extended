interface CustomMatchers<R = unknown> {
  toContainAnyKeys<T>(keys: Array<keyof T>): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toContainAnyKeys<T = unknown>(
  this: jest.MatcherContext,
  actual: T,
  expected: Array<keyof T>,
): jest.CustomMatcherResult {
  const matcherName = 'toContainAnyKeys';
  const { RECEIVED_COLOR, printReceived, printExpected, printWithType, matcherHint, matcherErrorMessage } = this.utils;

  if (typeof actual !== 'object' || actual === null) {
    throw new Error(
      matcherErrorMessage(
        matcherHint(matcherName),
        `${RECEIVED_COLOR('received')} value must be a non-null object`,
        printWithType('Received', actual, printReceived),
      ),
    );
  }

  const passMessage =
    matcherHint(`.not.${matcherName}`) +
    '\n\n' +
    'Expected object not to contain any of the following keys:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint(`.${matcherName}`) +
    '\n\n' +
    'Expected object to contain any of the following keys:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const pass = expected.some(key => Object.prototype.hasOwnProperty.call(actual, key));

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
