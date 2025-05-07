export function toBeEmpty(actual: unknown) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived, matcherHint } = this.utils;

  // @ts-expect-error OK to have implicit any for this.equals
  const pass = this.equals({}, actual, this.customTesters) || isEmptyIterable(actual);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeEmpty', 'received', '') +
          '\n\n' +
          'Expected value to not be empty received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeEmpty', 'received', '') +
          '\n\n' +
          'Expected value to be empty received:\n' +
          `  ${printReceived(actual)}`,
  };
}

const isEmptyIterable = (value: any) => {
  if (typeof value[Symbol.iterator] !== 'function') {
    return false;
  }
  const firstIteration = value[Symbol.iterator]().next();
  return firstIteration.done;
};
