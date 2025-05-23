/**
 * Use `.toReject` when checking if a promise rejects.
 */
export async function toReject(actual: Promise<unknown>) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { matcherHint } = this.utils;

  const pass = await actual.then(
    () => false,
    () => true,
  );

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toReject', 'received', '') + '\n\nExpected promise to resolve, however it rejected.\n'
        : matcherHint('.toReject', 'received', '') + '\n\nExpected promise to reject, however it resolved.\n',
  };
}
