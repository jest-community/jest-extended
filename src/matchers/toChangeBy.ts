/**
 * Use `.toChangeBy` when checking if a value changed by an amount.
 */
export function toChangeBy(mutator: () => unknown | void, checker: () => number, by: number = 1) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived: print, matcherHint: hint } = this.utils;

  const before = checker();
  mutator();
  const received = checker() - before;

  const passMessage = `
${hint('.not.toChangeBy', 'received', '')}\n\nExpected value to not change by ${by}, received:\n  ${print(received)}
`.trim();
  const failMessage = `
${hint('.toChangeBy', 'received', '')}\n\nExpected value to change by ${by}, received:\n  ${print(received)}
`.trim();

  const pass = received === by;
  return { pass, message: () => (pass ? passMessage : failMessage) };
}
