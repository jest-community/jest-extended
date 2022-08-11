export async function toResolve(actual) {
  const { matcherHint, printReceived } = this.utils;

  const expectedToResolveButGotRejectedMessage = (value, { isNot } = { isNot: false }) =>
    matcherHint('toResolve', 'received', '', { isNot, promise: true }) +
    '\n\n' +
    'Expected promise to resolve, however it rejected with: "' +
    printReceived(value) +
    '".\n';

  const expectedToRejectButGotResolvedMessage = (value, { isNot } = { isNot: false }) =>
    matcherHint('toResolve', 'received', '', { isNot, promise: true }) +
    '\n\n' +
    'Expected promise to reject, however it resolved with: "' +
    printReceived(value) +
    '".\n';

  return actual.then(
    value => ({
      pass: true,
      message: () =>
        this.isNot
          ? expectedToRejectButGotResolvedMessage(value, { isNot: this.isNot })
          : expectedToResolveButGotRejectedMessage(value, { isNot: this.isNot }),
    }),
    value => ({
      pass: false,
      message: () => expectedToResolveButGotRejectedMessage(value, { isNot: this.isNot }),
    }),
  );
}
