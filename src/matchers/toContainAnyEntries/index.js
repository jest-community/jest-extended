import predicate from './predicate';

const passMessage = (utils, object, entries) => () =>
  utils.matcherHint('.not.toContainAnyEntries') +
  '\n\n' +
  'Expected object to not contain any of the provided entries:\n' +
  `  ${utils.printExpected(entries)}\n` +
  'Received:\n' +
  `  ${utils.printReceived(object)}`;

const failMessage = (utils, object, entries) => () =>
  utils.matcherHint('.toContainAnyEntries') +
  '\n\n' +
  'Expected object to contain any of the provided entries:\n' +
  `  ${utils.printExpected(entries)}\n` +
  'Received:\n' +
  `  ${utils.printReceived(object)}`;

export function toContainAnyEntries(object, entries) {
  const pass = predicate(this.equals, object, entries);
  if (pass) {
    return { pass: true, message: passMessage(this.utils, object, entries) };
  }
  return { pass: false, message: failMessage(this.utils, object, entries) };
}
