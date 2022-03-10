interface CustomMatchers<R = unknown> {
  toBeEven(): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toBeEven(this: jest.MatcherContext, actual: unknown): jest.CustomMatcherResult {
  const { printReceived, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toBeEven', 'received', '') +
    '\n\n' +
    'Expected value to not be an even number received:\n' +
    ` ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeEven', 'received', '') +
    '\n\n' +
    'Expected value to be an even number received:\n' +
    ` ${printReceived(actual)}`;

  const pass = isNumber(actual as string) && isEven(actual as number);

  return { pass, message: () => (pass ? passMessage : failMessage) };
}

const isNumber = (expected: string) => !isNaN(parseInt(expected));
const isEven = (expected: number) => expected % 2 === 0;
