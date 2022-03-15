interface CustomMatchers<R = unknown> {
  toBeWithin(start: number, end: number): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toBeWithin(
  this: jest.MatcherContext,
  actual: unknown,
  start: number,
  end: number,
): jest.CustomMatcherResult {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toBeWithin') +
    '\n\n' +
    'Expected number to not be within start (inclusive) and end (exclusive):\n' +
    `  start: ${printExpected(start)}  end: ${printExpected(end)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeWithin') +
    '\n\n' +
    'Expected number to be within start (inclusive) and end (exclusive):\n' +
    `  start: ${printExpected(start)}  end: ${printExpected(end)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const pass = (actual as number) >= start && (actual as number) < end;

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
