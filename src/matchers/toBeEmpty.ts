interface CustomMatchers<R = unknown> {
  toBeEmpty(): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toBeEmpty(this: jest.MatcherContext, actual: unknown): jest.CustomMatcherResult {
  const { printReceived, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toBeEmpty', 'received', '') +
    '\n\n' +
    'Expected value to not be empty received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeEmpty', 'received', '') +
    '\n\n' +
    'Expected value to be empty received:\n' +
    `  ${printReceived(actual)}`;

  const pass = this.equals({}, actual) || isEmptyIterable(actual);

  return { pass, message: () => (pass ? passMessage : failMessage) };
}

const isEmptyIterable = (value: unknown): boolean => {
  if (typeof value[Symbol.iterator] !== 'function') {
    return false;
  }
  const firstIteration = (value as Iterable<unknown>)[Symbol.iterator]().next();
  return firstIteration.done;
};
