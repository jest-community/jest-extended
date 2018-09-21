import { matcherHint } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = () => () =>
  matcherHint('.not.toReject', 'received', '') + '\n\n' + 'Expected promise to resolve, however it rejected.\n';

const failMessage = () => () =>
  matcherHint('.toReject', 'received', '') + '\n\n' + 'Expected promise to reject, however it resolved.\n';

export default {
  toReject: async promise => {
    const pass = await predicate(promise);
    if (pass) {
      return { pass: true, message: passMessage() };
    }
    return { pass: false, message: failMessage() };
  }
};
