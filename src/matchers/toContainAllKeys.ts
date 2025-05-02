import { contains } from 'src/utils';

export function toContainAllKeys<E = unknown>(actual: unknown, expected: readonly (keyof E | string)[]) {
  // @ts-expect-error OK to have implicit any for this
  const { printExpected, printReceived, matcherHint } = this.utils;

  if (typeof actual !== 'object' || actual === null) {
    throw new Error(
        matcherHint('.toBeAfterOrEqualTo', 'received', '') +
        '\n\n' +
        'Expected value to be of type object but received:\n' +
        `  ${printReceived(actual)}`,
    );
  }

  const objectKeys = Object.keys(actual);
  // @ts-expect-error OK to have implicit any for this
  const pass = objectKeys.length === expected.length && expected.every(key => contains(this.equals, objectKeys, key));

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toContainAllKeys') +
          '\n\n' +
          'Expected object to not contain all keys:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(Object.keys(actual))}`
        : matcherHint('.toContainAllKeys') +
          '\n\n' +
          'Expected object to contain all keys:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(Object.keys(actual))}`,
  };
}
