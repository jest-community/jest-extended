interface CustomMatchers<R = unknown> {
  toIncludeRepeated(substring: string, times: number): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toIncludeRepeated(
  this: jest.MatcherContext,
  actual: string,
  expected: string,
  occurrences: number,
): jest.CustomMatcherResult {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toIncludeRepeated') +
    '\n\n' +
    `Expected string to not include repeated ${occurrences} times:\n` +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toIncludeRepeated') +
    '\n\n' +
    `Expected string to include repeated ${occurrences} times:\n` +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const pass = (actual.match(new RegExp(expected, 'g')) || []).length === occurrences;

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
