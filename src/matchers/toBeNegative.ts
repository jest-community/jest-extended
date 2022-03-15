interface CustomMatchers<R = unknown> {
  toBeNegative(): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toBeNegative(this: jest.MatcherContext, actual: unknown): jest.CustomMatcherResult {
  const { printReceived, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toBeNegative', 'received', '') +
    '\n\n' +
    'Expected value to not be a negative number received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeNegative', 'received', '') +
    '\n\n' +
    'Expected value to be a negative number received:\n' +
    `  ${printReceived(actual)}`;

  const pass = isNumber(actual as string) && isNegative(actual as number);

  return { pass, message: () => (pass ? passMessage : failMessage) };
}

const isNumber = (value: string) => !isNaN(parseInt(value));
const isNegative = (value: number) => value < 0;
