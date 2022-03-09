interface CustomMatchers<R = unknown> {
  fail(message?: string): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}
    interface Expect extends CustomMatchers {}
    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function fail(this: jest.MatcherContext, _: unknown, message: string): jest.CustomMatcherResult {
  return {
    pass: false,
    message: () => (message ? message : 'fails by .fail() assertion'),
  };
}
