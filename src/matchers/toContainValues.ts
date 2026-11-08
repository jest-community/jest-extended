import { contains } from 'src/utils';

export function toContainValues<E = unknown>(actual: unknown, expected: readonly E[]) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived, printExpected, matcherHint } = this.utils;

  // @ts-expect-error OK to have implicit any for this.utils and this.customTesters
  const equalityTesters = [...(this.customTesters ?? []), this.utils.iterableEquality];

  let pass = false;
  if (typeof actual === 'object' && actual !== null && !Array.isArray(actual)) {
    const values = Object.values(actual as Record<string, unknown>);
    // @ts-expect-error OK to have implicit any for this.equals
    pass = expected.every(value => contains((a, b) => this.equals(a, b, equalityTesters), values, value));
  }

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toContainValues') +
          '\n\n' +
          'Expected object to not contain all values:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toContainValues') +
          '\n\n' +
          'Expected object to contain all values:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
