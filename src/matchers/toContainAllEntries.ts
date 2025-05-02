import { containsEntry } from 'src/utils';

export function toContainAllEntries<E = unknown>(
  actual: unknown,
  expected: readonly (readonly [keyof E, E[keyof E]])[],
): {
  pass: boolean;
  message: () => string;
} {
  // @ts-expect-error OK to have implicit any for this
  const { printReceived, printExpected, matcherHint } = this.utils;

  const pass =
    typeof actual === 'object' &&
    actual !== null &&
    !Array.isArray(actual) &&
    expected.length == Object.keys(actual as Record<string, unknown>).length &&
    // @ts-expect-error containsEntry takes an any type
    expected.every(entry => containsEntry(this.equals, actual, entry as [any, any]));

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toContainAllEntries') +
          '\n\n' +
          'Expected object to not only contain all of the given entries:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toContainAllEntries') +
          '\n\n' +
          'Expected object to only contain all of the given entries:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
