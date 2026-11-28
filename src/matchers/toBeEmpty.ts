import type { MatcherContext } from 'src/utils';

export function toBeEmpty(this: MatcherContext, actual: unknown) {
  const { printReceived, matcherHint } = this.utils;

  const pass = this.equals({}, actual, this.customTesters) || isEmptyIterable(actual);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeEmpty', 'received', '') +
          '\n\n' +
          'Expected value to not be empty received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeEmpty', 'received', '') +
          '\n\n' +
          'Expected value to be empty received:\n' +
          `  ${printReceived(actual)}`,
  };
}

const isEmptyIterable = (value: unknown) => {
  if (value === undefined || value === null || typeof (value as Iterable<unknown>)[Symbol.iterator] !== 'function') {
    return false;
  }
  const firstIteration = (value as Iterable<unknown>)[Symbol.iterator]().next();
  return firstIteration.done === true;
};
