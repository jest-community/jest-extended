export function toBeHexadecimal(actual: unknown) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived, matcherHint } = this.utils;

  const pass =
    (typeof actual === 'string' && longRegex.test(actual)) || (typeof actual === 'string' && shortRegex.test(actual));

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeHexadecimal', 'received', '') +
          '\n\n' +
          'Expected value to not be a hexadecimal, received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeHexadecimal', 'received', '') +
          '\n\n' +
          'Expected value to be a hexadecimal, received:\n' +
          `  ${printReceived(actual)}`,
  };
}

const longRegex = /^#\b[a-f0-9]{6}\b/i;
const shortRegex = /^#\b[a-f0-9]{3}\b/i;
