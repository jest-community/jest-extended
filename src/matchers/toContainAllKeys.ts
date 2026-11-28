import type { MatcherContext } from 'src/utils';
import { contains } from 'src/utils';

export function toContainAllKeys<E = unknown>(
  this: MatcherContext,
  actual: unknown,
  expected: readonly (keyof E | string)[],
) {
  const { printExpected, printReceived, matcherHint } = this.utils;

  let pass = false;
  if (typeof actual === 'object' && actual !== null && !Array.isArray(actual)) {
    const objectKeys = Object.keys(actual as Record<string, unknown>);
    pass =
      objectKeys.length === expected.length &&
      expected.every(key => contains((a, b) => this.equals(a, b, this.customTesters), objectKeys, key));
  }

  const received = actual == null ? actual : Object.keys(actual as Record<string, unknown>);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toContainAllKeys') +
          '\n\n' +
          'Expected object to not contain all keys:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(received)}`
        : matcherHint('.toContainAllKeys') +
          '\n\n' +
          'Expected object to contain all keys:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(received)}`,
  };
}
