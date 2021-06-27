import predicate from './predicate';

const passMessage = (utils, item, list) => () =>
  utils.matcherHint('.not.toBeOneOf', 'item', 'list') +
  '\n\n' +
  'Expected value to not be in list:\n' +
  `  ${utils.printExpected(list)}\n` +
  'Received:\n' +
  `  ${utils.printReceived(item)}`;

const failMessage = (utils, item, list) => () =>
  utils.matcherHint('.toBeOneOf', 'item', 'list') +
  '\n\n' +
  'Expected value to be in list:\n' +
  `  ${utils.printExpected(list)}\n` +
  'Received:\n' +
  `  ${utils.printReceived(item)}`;

export function toBeOneOf(item, list) {
  const pass = predicate(this.equals, item, list);
  if (pass) {
    return { pass: true, message: passMessage(this.utils, item, list) };
  }

  return { pass: false, message: failMessage(this.utils, item, list) };
}
