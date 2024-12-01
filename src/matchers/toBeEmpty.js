export function toBeEmpty(actual) {
  const { printReceived, matcherHint } = this.utils;

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

const isEmptyIterable = value => {
  if (typeof value[Symbol.iterator] !== 'function') {
    return false;
  }
  const firstIteration = value[Symbol.iterator]().next();
  return firstIteration.done;
};
