import predicate from './predicate';

const passMessage = (utils, suffix, string) => () =>
  utils.matcherHint('.not.toEndWith') +
  '\n\n' +
  'Expected string to not end with:\n' +
  `  ${utils.printExpected(suffix)}\n` +
  'Received:\n' +
  `  ${utils.printReceived(string)}`;

const failMessage = (utils, suffix, string) => () =>
  utils.matcherHint('.toEndWith') +
  '\n\n' +
  'Expected string to end with:\n' +
  `  ${utils.printExpected(suffix)}\n` +
  'Received:\n' +
  `  ${utils.printReceived(string)}`;

export function toEndWith(string, suffix) {
  const pass = predicate(suffix, string);
  if (pass) {
    return { pass: true, message: passMessage(this.utils, suffix, string) };
  }

  return { pass: false, message: failMessage(this.utils, suffix, string) };
}
