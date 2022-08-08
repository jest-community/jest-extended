export async function toResolve(actual) {
  const { matcherHint } = this.utils;

  const matcherResult = await actual.then(
    value => ({
      pass: true,
      message: () =>
        this.isNot
          ? matcherHint('toResolve', 'received', '', { isNot: true, promise: true }) +
            '\n\n' +
            'Expected promise to reject, however it resolved with: "' +
            value +
            '".\n'
          : matcherHint('toResolve', 'received', '', { isNot: false, promise: true }) +
            '\n\n' +
            'Expected promise to resolve, however it rejected with: "' +
            value +
            '".\n',
    }),
    value => ({
      pass: false,
      message: () =>
        this.isNot
          ? matcherHint('toResolve', 'received', '', { isNot: true, promise: true }) +
            '\n\n' +
            'Expected promise to resolve, however it rejected with: "' +
            value +
            '".\n'
          : matcherHint('toResolve', 'received', '', { isNot: false, promise: true }) +
            '\n\n' +
            'Expected promise to resolve, however it rejected with: "' +
            value +
            '".\n',
    }),
  );

  return matcherResult;
}
