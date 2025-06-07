/**
 * Use `.toChangeTo` when checking if a value changed to a specific value.
 * @param {Function} mutator - Function that mutates the value.
 * @param {Function} checker - Function that checks the value.
 * @param {number} to - The value to check against.
 */
export function toChangeTo<E = unknown>(mutator: () => unknown | void, checker: () => E, to: E) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived: print, matcherHint: hint } = this.utils;

  const before = checker();

  if (before === to) {
    const noChangeMessage = `${hint(
      '.toChangeTo',
      'received',
      '',
    )}\n\nCannot expect a value to change to its original state, received:  ${print(before)}`;
    return { pass: false, message: () => noChangeMessage };
  }

  mutator();
  const received = checker();

  const passMessage = `
${hint('.not.toChangeTo', 'received', '')}\n\nExpected value to not change to ${to}, received:\n  ${print(received)}
`.trim();
  const failMessage = `
${hint('.toChangeto', 'received', '')}\n\nExpected value to change to ${to}, received:\n  ${print(received)}
`.trim();

  const pass = received !== before && received === to;
  return { pass, message: () => (pass ? passMessage : failMessage) };
}
