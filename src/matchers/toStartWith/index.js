import predicate from './predicate';

const passMessage = (utils, prefix, string) => () =>
  utils.matcherHint('.not.toStartWith') +
  '\n\n' +
  'Expected string to not start with:\n' +
  `  ${utils.printExpected(prefix)}\n` +
  'Received:\n' +
  `  ${utils.printReceived(string)}`;

const failMessage = (utils, prefix, string) => () =>
  utils.matcherHint('.toStartWith') +
  '\n\n' +
  'Expected string to start with:\n' +
  `  ${utils.printExpected(prefix)}\n` +
  'Received:\n' +
  `  ${utils.printReceived(string)}`;

export function toStartWith(string, prefix) {
  const pass = predicate(prefix, string);
  if (pass) {
    return { pass: true, message: passMessage(this.utils, prefix, string) };
  }

  return { pass: false, message: failMessage(this.utils, prefix, string) };
}
