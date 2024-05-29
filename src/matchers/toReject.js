export async function toReject(actual) {
  const { matcherHint, printReceived } = this.utils;

  const expectedToResolveButGotRejectedMessage = (value, { isNot } = { isNot: false }) =>
    matcherHint('toReject', 'received', '', { isNot, promise: true }) +
    '\n\n' +
    'Expected promise to resolve, however it rejected with: "' +
    printReceived(value) +
    '".\n';

  const expectedToRejectButGotResolvedMessage = (value, { isNot } = { isNot: false }) =>
    matcherHint('toReject', 'received', '', { isNot, promise: true }) +
    '\n\n' +
    'Expected promise to reject, however it resolved with: "' +
    printReceived(value) +
    '".\n';

  return actual.then(
    value => ({
      pass: false,
      message: () => expectedToRejectButGotResolvedMessage(value, { isNot: this.isNot }),
    }),
    value => ({
      pass: true,
      message: () =>
        this.isNot
          ? expectedToResolveButGotRejectedMessage(value, { isNot: this.isNot })
          : expectedToRejectButGotResolvedMessage(value, { isNot: this.isNot }),
    }),
  );
}
