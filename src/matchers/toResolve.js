export async function toResolve(actual) {
  const { matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toResolve', 'received', '') + '\n\n' + 'Expected promise to reject, however it resolved.\n';

  const failMessage =
    matcherHint('.toResolve', 'received', '') + '\n\n' + 'Expected promise to resolve, however it rejected.\n';

  const pass = await actual.then(
    () => true,
    () => false,
  );

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
