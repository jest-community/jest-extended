interface CustomMatchers<R = unknown> {
  toBeFrozen(): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toBeFrozen(this: jest.MatcherContext, actual: unknown): jest.CustomMatcherResult {
  const { matcherHint } = this.utils;

  const passMessage = matcherHint('.not.toBeFrozen', 'received', '') + '\n\n' + 'Expected object to not be frozen';

  const failMessage = matcherHint('.toBeFrozen', 'received', '') + '\n\n' + 'Expected object to be frozen';

  const pass = Object.isFrozen(actual);

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
