import { contains } from 'src/utils';

export function toBeOneOf<E = unknown>(actual: unknown, expected: readonly E[]) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived, printExpected, matcherHint } = this.utils;

  // @ts-expect-error OK to have implicit any for this.utils and this.customTesters
  const equalityTesters = [...(this.customTesters ?? []), this.utils.iterableEquality];

  // @ts-expect-error OK to have implicit any for this.equals
  const pass = contains((a, b) => this.equals(a, b, equalityTesters), expected, actual);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeOneOf') +
          '\n\n' +
          'Expected value to not be in list:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeOneOf') +
          '\n\n' +
          'Expected value to be in list:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
