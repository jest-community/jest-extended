export function toBeFrozen(actual) {
  const { matcherHint } = this.utils;

  const pass = Object.isFrozen(actual);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint(".not.toBeFrozen", "received", "") + "\n\nExpected object to not be frozen"
        : matcherHint(".toBeFrozen", "received", "") + "\n\nExpected object to be frozen",
  };
}
