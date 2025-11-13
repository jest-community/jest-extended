export function toBeSimilarDate(actual: unknown, expected: unknown, precision = 50) {
  const {
    printReceived,
    printExpected,
    matcherHint,
    // @ts-expect-error OK to have implicit any for this.utils
  } = this.utils;

  if (!(actual instanceof Date) || !(expected instanceof Date)) {
    return {
      pass: false,
      message: () =>
        matcherHint('.toBeSimilarDate', 'received', '') +
        '\n\n' +
        'Expected both values to be valid Date instances.\n' +
        `Received: ${printReceived(actual)}\n` +
        `Expected: ${printExpected(expected)}`,
    };
  }

  const diff = Math.abs(actual.getTime() - expected.getTime());
  const pass = diff <= precision;

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeSimilarDate', 'received', '') +
          '\n\n' +
          `Expected date NOT to be within ${precision}ms of:\n  ${printExpected(expected)}\n` +
          `Received:\n  ${printReceived(actual)}\n` +
          `Difference: ${Math.abs((actual as Date).getTime() - (expected as Date).getTime())}ms`
        : matcherHint('.toBeSimilarDate', 'received', '') +
          '\n\n' +
          `Expected date to be within ${precision}ms of:\n  ${printExpected(expected)}\n` +
          `Received:\n  ${printReceived(actual)}\n` +
          `Difference: ${Math.abs((actual as Date).getTime() - (expected as Date).getTime())}ms`,
  };
}
