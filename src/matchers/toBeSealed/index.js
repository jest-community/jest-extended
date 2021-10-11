import { matcherHint } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = () => () => matcherHint('.not.toBeSealed', 'received', '') + '\n\nExpected object to be not sealed';

const failMessage = () => () => matcherHint('.toBeSealed', 'received', '') + '\n\nExpected object to not sealed';

export function toBeSealed(expected) {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage() };
  }

  return { pass: false, message: failMessage() };
}
