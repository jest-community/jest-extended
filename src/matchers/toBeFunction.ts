export function toBeFunction(actual: unknown) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived, matcherHint } = this.utils;

  const pass = typeof actual === 'function';

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeFunction', 'received', '') +
          '\n\n' +
          'Expected value to not be a function, received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeFunction', 'received', '') +
          '\n\n' +
          'Expected to receive a function, received:\n' +
          `  ${printReceived(actual)}`,
  };
}
