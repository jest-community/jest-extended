import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = (actual, expected) => () =>
  matcherHint('.not.toResolve') + '\n\n' + 'Expected promise to reject, however it resolved.\n';

const failMessage = (actual, expected) => () =>
  matcherHint('.toResolve') + '\n\n' + 'Expected promise to resolve, however it rejected.\n';

export default {
  toResolve: async promise => {
    const pass = await predicate(promise);
    if (pass) {
      return { pass: true, message: passMessage() };
    }
    return { pass: false, message: failMessage() };
  }
};
