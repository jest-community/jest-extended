import type { MatcherContext } from 'expect';
export async function toResolve(this: MatcherContext, actual: Promise<unknown>) {
  const { matcherHint } = this.utils;

  const pass = await actual.then(
    () => true,
    () => false,
  );

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toResolve', 'received', '') + '\n\nExpected promise to reject, however it resolved.\n'
        : matcherHint('.toResolve', 'received', '') + '\n\nExpected promise to resolve, however it rejected.\n',
  };
}
