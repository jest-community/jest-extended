import { matcherHint } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = () =>
  matcherHint('.not.toResolve', 'received', '') + '\n\n' + 'Expected promise to reject, however it resolved.\n';

const failMessage = () =>
  matcherHint('.toResolve', 'received', '') + '\n\n' + 'Expected promise to resolve, however it rejected.\n';

export async function toResolve(promise) {
  const pass = await predicate(promise);
  if (pass) {
    return { pass: true, message: passMessage };
  }
  return { pass: false, message: failMessage };
}
