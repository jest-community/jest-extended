export function toHaveSameJson(actual, expected) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const actualJson = JSON.stringify(actual);
  const expectedJson = JSON.stringify(expected);

  const pass = actualJson === expectedJson;

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toHaveSameJson') +
          '\n\n' +
          'Expected not to have JSON serialization:\n' +
          `  ${printExpected(expectedJson)}\n`
        : matcherHint('.toHaveSameJson') +
          '\n\n' +
          'Expected object to have JSON serialization:\n' +
          `  ${printExpected(expectedJson)}\n` +
          'Received JSON serialization:\n' +
          `  ${printReceived(actualJson)}`,
  };
}
