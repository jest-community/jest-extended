import { matcherHint } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = () => () => matcherHint('.not.toBeFrozen') + '\n\n' + 'Expected object to not be frozen';

const failMessage = () => () => matcherHint('.toBeFrozen') + '\n\n' + 'Expected object to be frozen';

export default {
  toBeFrozen: expected => {
    const pass = predicate(expected);
    if (pass) {
      return { pass: true, message: passMessage() };
    }

    return { pass: false, message: failMessage() };
  }
};
