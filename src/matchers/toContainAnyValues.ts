import { getType } from 'jest-get-type';
import { contains } from 'src/utils';

export function toContainAnyValues<E = unknown>(actual: unknown, expected: readonly E[]) {
  // @ts-expect-error OK to have implicit any for this
  const { printReceived, printExpected, matcherHint } = this.utils;

  let pass = false;
  if (getType(actual) === 'object') {
    // @ts-expect-error getType provides the type check
    const objectValues = Object.keys(actual).map(k => actual[k]);
    // @ts-expect-error OK to have implicit any for this
    pass = expected.some(value => contains(this.equals, objectValues, value));
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
