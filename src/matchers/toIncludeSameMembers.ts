interface CustomMatchers<R = unknown> {
  toIncludeSameMembers<T>(members: T[]): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toIncludeSameMembers<E>(
  this: jest.MatcherContext,
  actual: unknown[],
  expected: E[],
): jest.CustomMatcherResult {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toIncludeSameMembers') +
    '\n\n' +
    'Expected list to not exactly match the members of:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toIncludeSameMembers') +
    '\n\n' +
    'Expected list to have the following members and no more:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const pass = predicate(this.equals, actual, expected);

  return { pass, message: () => (pass ? passMessage : failMessage) };
}

const predicate = (equals: jest.MatcherContext['equals'], actual: unknown[], expected: unknown[]) => {
  if (!Array.isArray(actual) || !Array.isArray(expected) || actual.length !== expected.length) {
    return false;
  }

  const remaining = expected.reduce((remaining, secondValue) => {
    if (remaining === null) return remaining;

    const index = remaining.findIndex((firstValue: unknown) => equals(secondValue, firstValue));

    if (index === -1) {
      return null;
    }

    return remaining.slice(0, index).concat(remaining.slice(index + 1));
  }, actual);

  return !!remaining && remaining.length === 0;
};
