export function toBeAfter(actual: unknown, after: Date) {
  // @ts-expect-error OK to have implicit any for this
  const { printReceived, matcherHint } = this.utils;

  const pass = actual instanceof Date && actual > after;

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeAfter', 'received', '') +
          '\n\n' +
          `Expected date to be after ${printReceived(after)} but received:\n` +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeAfter', 'received', '') +
          '\n\n' +
          `Expected date to be after ${printReceived(after)} but received:\n` +
          `  ${printReceived(actual)}`,
  };
}
