interface CustomMatchers<R = unknown> {
  toBeHexadecimal(): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toBeHexadecimal(this: jest.MatcherContext, actual: unknown): jest.CustomMatcherResult {
  const { printReceived, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toBeHexadecimal', 'received', '') +
    '\n\n' +
    'Expected value to not be a hexadecimal, received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeHexadecimal', 'received', '') +
    '\n\n' +
    'Expected value to be a hexadecimal, received:\n' +
    `  ${printReceived(actual)}`;

  const pass = longRegex.test(actual as string) || shortRegex.test(actual as string);

  return { pass, message: () => (pass ? passMessage : failMessage) };
}

const longRegex = RegExp(/^#\b[a-f0-9]{6}\b/gi);
const shortRegex = RegExp(/^#\b[a-f0-9]{3}\b/gi);
