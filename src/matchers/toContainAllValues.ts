import { getType } from 'jest-get-type';
import { contains } from 'src/utils';

export function toContainAllValues<E = unknown>(actual: unknown, expected: readonly E[]) {
  // @ts-expect-error OK to have implicit any for this
  const { printReceived, printExpected, matcherHint } = this.utils;

  let pass = false;
  if (getType(actual) === 'object') {
    // @ts-expect-error getType provides the type check
    const values = Object.keys(actual).map(k => actual[k]);
    pass =
      // @ts-expect-error OK to have implicit any for this
      values.length === expected.length && values.every(objectValue => contains(this.equals, expected, objectValue));
  }

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
