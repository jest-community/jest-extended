import type { MatcherContext } from 'expect';
export function toBeInteger(this: MatcherContext, actual: unknown) {
  const { printReceived, matcherHint } = this.utils;

  const pass = isNumber(actual) && isInteger(actual);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeInteger', 'received', '') +
          '\n\n' +
          'Expected value to not be an integer received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeInteger', 'received', '') +
          '\n\n' +
          'Expected value to be an integer received:\n' +
          `  ${printReceived(actual)}`,
  };
}

const isNumber = (value: any) => !isNaN(parseInt(value));
const isInteger = (value: any) => Number.isInteger(+value);
