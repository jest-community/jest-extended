export function toBeSealed(actual: unknown) {
  // @ts-expect-error OK to have implicit any for this.utils
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
