import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = (object, entries) => () =>
  matcherHint('.not.toContainAnyEntries') +
  '\n\n' +
  'Expected object to not contain any of the provided entries:\n' +
  `  ${printExpected(entries)}\n` +
  'Received:\n' +
  `  ${printReceived(object)}`;

const failMessage = (object, entries) => () =>
  matcherHint('.toContainAnyEntries') +
  '\n\n' +
  'Expected object to contain any of the provided entries:\n' +
  `  ${printExpected(entries)}\n` +
  'Received:\n' +
  `  ${printReceived(object)}`;

export default {
  toContainAnyEntries: (object, entries) => {
    const pass = predicate(object, entries);
    if (pass) {
      return { pass: true, message: passMessage(object, entries) };
    }
    return { pass: false, message: failMessage(object, entries) };
  }
};
