import { contains } from 'src/utils';

export function toContainAnyValues<E = unknown>(actual: unknown, expected: readonly E[]) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived, printExpected, matcherHint } = this.utils;

  // @ts-expect-error OK to have implicit any for this.utils and this.customTesters
  const equalityTesters = [...(this.customTesters ?? []), this.utils.iterableEquality];

  let pass = false;
  if (typeof actual === 'object' && actual !== null && !Array.isArray(actual)) {
    const objectValues = Object.values(actual as Record<string, unknown>);
    // @ts-expect-error OK to have implicit any for this.equals
    pass = expected.some(value => contains((a, b) => this.equals(a, b, equalityTesters), objectValues, value));
  }

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toContainAnyValues') +
          '\n\n' +
          'Expected object to not contain any of the following values:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toContainAnyValues') +
          '\n\n' +
          'Expected object to contain any of the following values:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
