import { contains } from 'src/utils';

export function toContainValue<E = unknown>(actual: unknown, expected: E) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived, printExpected, matcherHint } = this.utils;

  // @ts-expect-error OK to have implicit any for this.utils and this.customTesters
  const equalityTesters = [...(this.customTesters ?? []), this.utils.iterableEquality];

  let pass = false;
  if (typeof actual === 'object' && actual !== null && !Array.isArray(actual)) {
    const values = Object.values(actual as Record<string, unknown>);
    // @ts-expect-error OK to have implicit any for this.equals
    pass = contains((a, b) => this.equals(a, b, equalityTesters), values, expected);
  }

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toContainValue') +
          '\n\n' +
          'Expected object to not contain value:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toContainValue') +
          '\n\n' +
          'Expected object to contain value:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
