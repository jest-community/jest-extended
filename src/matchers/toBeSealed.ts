import type { MatcherContext } from 'expect';
export function toBeSealed(this: MatcherContext, actual: unknown) {
  const { matcherHint } = this.utils;

  const pass = Object.isSealed(actual);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeSealed', 'received', '') + '\n\nExpected object to be not sealed'
        : matcherHint('.toBeSealed', 'received', '') + '\n\nExpected object to not sealed',
  };
}
