import { matcherHint } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = () =>
  matcherHint('.not.toResolve', 'received', '') + '\n\n' + 'Expected promise to reject, however it resolved.\n';

const failMessage = error => () => {
  const base =
    matcherHint('.toResolve', 'received', '') + '\n\n' + 'Expected promise to resolve, however it rejected.\n';
  if (error === undefined) {
    return base;
  }
  return base + '\n\n' + 'Error:\n' + error;
};

export default {
  toResolve: async promise => {
    const { pass, error } = await predicate(promise);
    if (pass) {
      return { pass: true, message: passMessage };
    }
    return { pass: false, message: failMessage(error) };
  }
};
