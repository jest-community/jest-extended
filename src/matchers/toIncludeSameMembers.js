export function toIncludeSameMembers(actual, expected) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const pass = predicate((a, b) => this.equals(a, b, this.customTesters), actual, expected);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toIncludeSameMembers') +
          '\n\n' +
          'Expected list to not exactly match the members of:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toIncludeSameMembers') +
          '\n\n' +
          'Expected list to have the following members and no more:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}

const predicate = (equals, actual, expected) => {
  if (!Array.isArray(actual) || !Array.isArray(expected) || actual.length !== expected.length) {
    return false;
  }

  const remaining = expected.reduce((remaining, secondValue) => {
    if (remaining === null) return remaining;

    const index = remaining.findIndex(firstValue => equals(secondValue, firstValue));

    if (index === -1) {
      return null;
    }

    return remaining.slice(0, index).concat(remaining.slice(index + 1));
  }, actual);

  return !!remaining && remaining.length === 0;
};
