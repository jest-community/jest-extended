import predicate from './predicate';

const passMessage = utils => () =>
  utils.matcherHint('.not.toBeFrozen', 'received', '') + '\n\n' + 'Expected object to not be frozen';

const failMessage = utils => () =>
  utils.matcherHint('.toBeFrozen', 'received', '') + '\n\n' + 'Expected object to be frozen';

export function toBeFrozen(expected) {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(this.utils) };
  }

  return { pass: false, message: failMessage(this.utils) };
}
