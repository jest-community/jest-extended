import { getType } from 'jest-get-type';
import { contains } from 'src/utils';

export function toContainAllKeys<E = unknown>(actual: unknown, expected: readonly (keyof E | string)[]) {
  // @ts-expect-error OK to have implicit any for this
  const { printExpected, printReceived, matcherHint } = this.utils;

  let pass = false;
  if (getType(actual) === 'object') {
    // @ts-expect-error OK to have implicit any for this
    const objectKeys = Object.keys(actual);
    // @ts-expect-error OK to have implicit any for this
    pass = objectKeys.length === expected.length && expected.every(key => contains(this.equals, objectKeys, key));
  }

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toContainAllKeys') +
          '\n\n' +
          'Expected object to not contain all keys:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          // @ts-expect-error getType provides the type check
          `  ${printReceived(Object.keys(actual))}`
        : matcherHint('.toContainAllKeys') +
          '\n\n' +
          'Expected object to contain all keys:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          // @ts-expect-error getType provides the type check
          `  ${printReceived(Object.keys(actual))}`,
  };
}
