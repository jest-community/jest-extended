const JEST_MATCHERS_OBJECT = Symbol.for('$$jest-matchers-object');

function haveEqualItems(actual, expected, equals) {
  const expectedIterator = expected[Symbol.iterator]();

  for (const actualItem of actual) {
    const expectedStep = expectedIterator.next();

    if (expectedStep.done) {
      return false;
    }

    const expectedItem = expectedStep.value;

    const customEqualityTesters = global[JEST_MATCHERS_OBJECT].customEqualityTesters;

    if (!equals(actualItem, expectedItem, customEqualityTesters)) {
      return false;
    }
  }

  return expectedIterator.next().done;
}

export function toHaveEqualItems(actual, expected) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const pass = haveEqualItems(actual, expected, this.equals);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toHaveEqualItems') +
          '\n\n' +
          'Expected iterable to not exactly match the items of:\n' +
          `  ${printExpected(Array.from(expected))}\n` +
          'Received:\n' +
          `  ${printReceived(Array.from(actual))}`
        : matcherHint('.toHaveEqualItems') +
          '\n\n' +
          'Expected iterable to exactly match the items of:\n' +
          `  ${printExpected(Array.from(expected))}\n` +
          'Received:\n' +
          `  ${printReceived(Array.from(actual))}`,
  };
}
