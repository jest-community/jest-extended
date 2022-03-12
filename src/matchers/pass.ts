interface CustomMatchers<R = unknown> {
  pass(message?: string): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}
    interface Expect extends CustomMatchers {}
    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function pass(this: jest.MatcherContext, _: unknown, message: string): jest.CustomMatcherResult {
  return {
    pass: true,
    message: () => (message ? message : 'passes by .pass() assertion'),
  };
}
