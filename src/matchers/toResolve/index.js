import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = () => () =>
  matcherHint('.not.toResolve') +
  '\n\n' +
  `Expected promise to ${printExpected('reject')}, however it ${printReceived('resolved')}.\n`;

const failMessage = () => () =>
  matcherHint('.toResolve') +
  '\n\n' +
  `Expected promise to ${printExpected('resolve')}, however it ${printReceived('rejected')}.\n`;

export default {
  toResolve: async promise => {
    const pass = await predicate(promise);
    if (pass) {
      return { pass: true, message: passMessage() };
    }
    return { pass: false, message: failMessage() };
  }
};
