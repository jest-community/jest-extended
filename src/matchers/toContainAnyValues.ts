import { contains } from 'src/utils';

export function toContainAnyValues<E = unknown>(actual: unknown, expected: readonly E[]) {
  // @ts-expect-error OK to have implicit any for this
  const { printReceived, printExpected, matcherHint } = this.utils;

  if (typeof actual !== 'object' || actual === null) {
    throw new Error(
        matcherHint('.toContainAnyValues', 'received', '') +
        '\n\n' +
        'Expected value to be of type object but received:\n' +
        `  ${printReceived(actual)}`,
    );
  }

  const objectValues = Object.keys(actual).map(k => (actual as Record<string, unknown>)[k]);
  // @ts-expect-error OK to have implicit any for this
  const pass = expected.some(value => contains(this.equals, objectValues, value));

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
