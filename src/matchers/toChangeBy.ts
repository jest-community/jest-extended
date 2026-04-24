/**
 * Use `.toChangeBy` when checking if a value changed by an amount.
 */
export function toChangeBy(mutator: () => unknown | void, checker: () => number | bigint, by: number | bigint = 1) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived: print, matcherHint: hint } = this.utils;

  const before = checker();
  mutator();
  const after = checker();

  let received;
  if (typeof before === 'bigint' && typeof after === 'bigint') {
    received = after - before;
  } else {
    received = Number(after) - Number(before);
  }

  const passMessage = `
${hint('.not.toChangeBy', 'received', '')}\n\nExpected value to not change by ${by}, received:\n  ${print(received)}
`.trim();
  const failMessage = `
${hint('.toChangeBy', 'received', '')}\n\nExpected value to change by ${by}, received:\n  ${print(received)}
`.trim();

  const pass = received === by;
  return { pass, message: () => (pass ? passMessage : failMessage) };
}
