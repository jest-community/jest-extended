export function toIncludeCaseInsensitive(actual, expected) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const pass = String(actual).toLocaleLowerCase().includes(String(expected).toLocaleLowerCase());

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toIncludeCaseInsensitive') +
          '\n\n' +
          'Expected string to not include while ignoring case:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toIncludeCaseInsensitive') +
          '\n\n' +
          'Expected string to include while ignoring case:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
