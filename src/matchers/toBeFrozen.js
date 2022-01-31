export function toBeFrozen(actual) {
  const { matcherHint } = this.utils;

  const passMessage = matcherHint('.not.toBeFrozen', 'received', '') + '\n\n' + 'Expected object to not be frozen';

  const failMessage = matcherHint('.toBeFrozen', 'received', '') + '\n\n' + 'Expected object to be frozen';

  const pass = Object.isFrozen(actual);

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
