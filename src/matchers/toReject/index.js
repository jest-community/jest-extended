import predicate from './predicate';

const passMessage = utils => () =>
  utils.matcherHint('.not.toReject', 'received', '') + '\n\n' + 'Expected promise to resolve, however it rejected.\n';

const failMessage = utils => () =>
  utils.matcherHint('.toReject', 'received', '') + '\n\n' + 'Expected promise to reject, however it resolved.\n';

export async function toReject(promise) {
  const pass = await predicate(promise);
  if (pass) {
    return { pass: true, message: passMessage(this.utils) };
  }
  return { pass: false, message: failMessage(this.utils) };
}
