import { getType } from 'jest-get-type';

export function toBeWithin(actual: unknown, start: number, end: number) {
  // @ts-expect-error OK to have implicit any for this
  const { printReceived, printExpected, matcherHint } = this.utils;

  // @ts-expect-error getType provides the type check
  const pass = getType(actual) === 'number' && actual >= start && actual < end;

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeWithin') +
          '\n\n' +
          'Expected number to not be within start (inclusive) and end (exclusive):\n' +
          `  start: ${printExpected(start)}  end: ${printExpected(end)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeWithin') +
          '\n\n' +
          'Expected number to be within start (inclusive) and end (exclusive):\n' +
          `  start: ${printExpected(start)}  end: ${printExpected(end)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
