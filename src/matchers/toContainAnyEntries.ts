import { contains } from 'src/utils';

export function toContainAnyEntries<E = unknown>(
  actual: unknown,
  expected: readonly (readonly [keyof E, E[keyof E]])[],
) {
  // @ts-expect-error OK to have implicit any for this
  const { printReceived, printExpected, matcherHint } = this.utils;

  let pass = false;
  if (typeof actual === 'object' && actual !== null && !Array.isArray(actual)) {
    const entries = Object.keys(actual as Record<string, unknown>).map(k => [
      k,
      (actual as Record<string, unknown>)[k],
    ]);
    // @ts-expect-error OK to have implicit any for this
    pass = expected.some(entry => contains(this.equals, entries, entry));
  }

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
