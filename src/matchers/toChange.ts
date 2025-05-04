/**
 * Use `.toChange` when checking if a value has changed.
 * @example
 * expect(() => value--).toChange(() => value);
 */
export function toChange(mutator: () => unknown | void, checker: () => number) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived: print, matcherHint: hint } = this.utils;

  const before = checker();
  mutator();
  const received = checker();

  const passMessage = `
  ${hint('.not.toChange', 'received', '')}\n\nExpected value to not change, received:\n  ${print(received)}
  `.trim();
  const failMessage = `
  ${hint('.toChange', 'received', '')}\n\nExpected value to change, received:\n  ${print(received)}
  `.trim();

  const pass = received !== before;
  return { pass, message: () => (pass ? passMessage : failMessage) };
}
