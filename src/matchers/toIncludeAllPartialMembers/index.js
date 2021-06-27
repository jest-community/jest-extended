import predicate from './predicate';

const passMessage = (utils, actual, expected) => () =>
  utils.matcherHint('.not.toIncludeAllPartialMembers') +
  '\n\n' +
  'Expected list to not have all of the following partial members:\n' +
  `  ${utils.printExpected(expected)}\n` +
  'Received:\n' +
  `  ${utils.printReceived(actual)}`;

const failMessage = (utils, actual, expected) => () =>
  utils.matcherHint('.toIncludeAllPartialMembers') +
  '\n\n' +
  'Expected list to have all of the following partial members:\n' +
  `  ${utils.printExpected(expected)}\n` +
  'Received:\n' +
  `  ${utils.printReceived(actual)}`;

export function toIncludeAllPartialMembers(actual, expected) {
  const pass = predicate(this.equals, actual, expected);
  if (pass) {
    return { pass: true, message: passMessage(this.utils, actual, expected) };
  }

  return { pass: false, message: failMessage(this.utils, actual, expected) };
}
