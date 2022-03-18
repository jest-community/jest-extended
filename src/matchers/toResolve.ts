interface CustomMatchers<R = unknown> {
  toResolve(): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export async function toResolve(
  this: jest.MatcherContext,
  actual: Promise<unknown>,
): Promise<jest.CustomMatcherResult> {
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
