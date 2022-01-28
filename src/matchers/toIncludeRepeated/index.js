import predicate from './predicate';

const passMessage = (utils, actual, expected, occurrences) => () =>
  utils.matcherHint('.not.toIncludeRepeated') +
  '\n\n' +
  `Expected string to not include repeated ${occurrences} times:\n` +
  `  ${utils.printExpected(expected)}\n` +
  'Received:\n' +
  `  ${utils.printReceived(actual)}`;

const failMessage = (utils, actual, expected, occurrences) => () =>
  utils.matcherHint('.toIncludeRepeated') +
  '\n\n' +
  `Expected string to include repeated ${occurrences} times:\n` +
  `  ${utils.printExpected(expected)}\n` +
  'Received:\n' +
  `  ${utils.printReceived(actual)}`;

export function toIncludeRepeated(actual, expected, occurrences) {
  const pass = predicate(actual, expected, occurrences);
  if (pass) {
    return { pass: true, message: passMessage(this.utils, actual, expected, occurrences) };
  }

  return { pass: false, message: failMessage(this.utils, actual, expected, occurrences) };
}
