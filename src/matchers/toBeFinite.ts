export function toBeFinite(actual: unknown) {
  // @ts-expect-error OK to have implicit any for this
  const { printReceived, matcherHint } = this.utils;

  const pass = Number.isFinite(actual);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeFinite', 'received', '') +
          '\n\n' +
          'Expected value to not be finite received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeFinite', 'received', '') +
          '\n\n' +
          'Expected value to be finite received:\n' +
          `  ${printReceived(actual)}`,
  };
}
