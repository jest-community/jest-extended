export function toBeNaN(actual: any) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived, matcherHint } = this.utils;

  const pass = isNaN(actual);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeNaN', 'received', '') +
          '\n\n' +
          'Expected value to be a number received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeNaN', 'received', '') +
          '\n\n' +
          'Expected value to not be a number received:\n' +
          `  ${printReceived(actual)}`,
  };
}
