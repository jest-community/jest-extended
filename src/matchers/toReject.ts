interface CustomMatchers<R = unknown> {
  toReject(): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export async function toReject(this: jest.MatcherContext, actual: Promise<unknown>): Promise<jest.CustomMatcherResult> {
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
