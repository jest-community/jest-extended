export function toBeNaN(actual: unknown) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived, matcherHint } = this.utils;

  const pass = Number.isNaN(actual);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeNaN', 'received', '') +
          '\n\n' +
          'Expected value to not be NaN received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeNaN', 'received', '') +
          '\n\n' +
          'Expected value to be NaN received:\n' +
          `  ${printReceived(actual)}`,
  };
}
