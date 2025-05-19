export function toBeWithin(actual: unknown, start: number, end: number) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived, printExpected, matcherHint } = this.utils;

  const pass = (typeof actual === 'number' || typeof actual === 'bigint') && actual >= start && actual < end;

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
