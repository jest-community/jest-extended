import { contains } from 'src/utils';

export function toContainAnyEntries<E = unknown>(
  actual: unknown,
  expected: readonly (readonly [keyof E, E[keyof E]])[],
) {
  // @ts-expect-error OK to have implicit any for this
  const { printReceived, printExpected, matcherHint } = this.utils;

  if (typeof actual !== 'object' || actual === null) {
    throw new Error(
        matcherHint('.toContainAnyEntries', 'received', '') +
        '\n\n' +
        'Expected value to be of type object but received:\n' +
        `  ${printReceived(actual)}`,
    );
  }

  const entries = Object.keys(actual).map(k => [k, (actual as Record<string, unknown>)[k]]);
  // @ts-expect-error OK to have implicit any for this
  const pass = expected.some(entry => contains(this.equals, entries, entry));

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toContainAnyEntries') +
          '\n\n' +
          'Expected object to not contain any of the provided entries:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toContainAnyEntries') +
          '\n\n' +
          'Expected object to contain any of the provided entries:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
