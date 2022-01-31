export function toBeSealed(actual) {
  const { matcherHint } = this.utils;

  const passMessage = matcherHint('.not.toBeSealed', 'received', '') + '\n\nExpected object to be not sealed';

  const failMessage = matcherHint('.toBeSealed', 'received', '') + '\n\nExpected object to not sealed';

  const pass = Object.isSealed(actual);

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
