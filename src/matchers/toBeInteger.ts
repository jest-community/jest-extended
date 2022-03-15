interface CustomMatchers<R = unknown> {
  toBeInteger(): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toBeInteger(this: jest.MatcherContext, actual: unknown): jest.CustomMatcherResult {
  const { printReceived, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toBeInteger', 'received', '') +
    '\n\n' +
    'Expected value to not be an integer received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeInteger', 'received', '') +
    '\n\n' +
    'Expected value to be an integer received:\n' +
    `  ${printReceived(actual)}`;

  const pass = isNumber(actual as string) && isInteger(actual as number);

  return { pass, message: () => (pass ? passMessage : failMessage) };
}

const isNumber = (value: string) => !isNaN(parseInt(value));
const isInteger = (value: number) => Number.isInteger(+value);
