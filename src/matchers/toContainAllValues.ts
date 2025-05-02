import { contains } from 'src/utils';

export function toContainAllValues<E = unknown>(actual: unknown, expected: readonly E[]) {
  // @ts-expect-error OK to have implicit any for this
  const { printReceived, printExpected, matcherHint } = this.utils;

  if (typeof actual !== 'object' || actual === null) {
    throw new Error(
        matcherHint('.toContainAllValues', 'received', '') +
        '\n\n' +
        'Expected value to be of type object but received:\n' +
        `  ${printReceived(actual)}`,
    );
  }

  const values = Object.keys(actual).map(k => (actual as Record<string, unknown>)[k]);
  const pass =
    // @ts-expect-error OK to have implicit any for this
    values.length === expected.length && values.every(objectValue => contains(this.equals, expected, objectValue));

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toContainAllValues') +
          '\n\n' +
          'Expected object to not contain all values:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toContainAllValues') +
          '\n\n' +
          'Expected object to contain all values:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
