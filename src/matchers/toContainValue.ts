import { getType } from 'jest-get-type';
import { contains } from 'src/utils';

export function toContainValue<E = unknown>(actual: unknown, expected: E) {
  // @ts-expect-error OK to have implicit any for this
  const { printReceived, printExpected, matcherHint } = this.utils;

  let pass = false;
  if (getType(actual) === 'object') {
    // @ts-expect-error getType provides the type check
    const values = Object.keys(actual).map(k => actual[k]);
    // @ts-expect-error OK to have implicit any for this
    pass = contains(this.equals, values, expected);
  }

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toContainValue') +
          '\n\n' +
          'Expected object to not contain value:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toContainValue') +
          '\n\n' +
          'Expected object to contain value:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
