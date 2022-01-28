import predicate from './predicate';

const passMessage = utils => () =>
  utils.matcherHint('.not.toResolve', 'received', '') + '\n\n' + 'Expected promise to reject, however it resolved.\n';

const failMessage = utils => () =>
  utils.matcherHint('.toResolve', 'received', '') + '\n\n' + 'Expected promise to resolve, however it rejected.\n';

export async function toResolve(promise) {
  const pass = await predicate(promise);
  if (pass) {
    return { pass: true, message: passMessage(this.utils) };
  }
  return { pass: false, message: failMessage(this.utils) };
}
