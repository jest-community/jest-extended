interface CustomMatchers<R = unknown> {
  toBeSealed(): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toBeSealed(this: jest.MatcherContext, actual: unknown): jest.CustomMatcherResult {
  const { matcherHint } = this.utils;

  const passMessage = matcherHint('.not.toBeSealed', 'received', '') + '\n\nExpected object to be not sealed';

  const failMessage = matcherHint('.toBeSealed', 'received', '') + '\n\nExpected object to not sealed';

  const pass = Object.isSealed(actual);

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
