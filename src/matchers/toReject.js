export async function toReject(actual) {
  const { matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toReject', 'received', '') + '\n\n' + 'Expected promise to resolve, however it rejected.\n';

  const failMessage =
    matcherHint('.toReject', 'received', '') + '\n\n' + 'Expected promise to reject, however it resolved.\n';

  const pass = await actual.then(
    () => false,
    () => true,
  );

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
