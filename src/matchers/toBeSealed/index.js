import predicate from './predicate';

const passMessage = utils => () =>
  utils.matcherHint('.not.toBeSealed', 'received', '') + '\n\nExpected object to be not sealed';

const failMessage = utils => () =>
  utils.matcherHint('.toBeSealed', 'received', '') + '\n\nExpected object to not sealed';

export function toBeSealed(expected) {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(this.utils) };
  }

  return { pass: false, message: failMessage(this.utils) };
}
