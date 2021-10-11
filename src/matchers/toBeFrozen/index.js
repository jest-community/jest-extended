import { matcherHint } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = () => matcherHint('.not.toBeFrozen', 'received', '') + '\n\n' + 'Expected object to not be frozen';

const failMessage = () => matcherHint('.toBeFrozen', 'received', '') + '\n\n' + 'Expected object to be frozen';

export function toBeFrozen(expected) {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage };
  }

  return { pass: false, message: failMessage };
}
