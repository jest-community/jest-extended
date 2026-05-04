export async function toReject(actual: Promise<unknown>) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { matcherHint, printReceived } = this.utils;

  const { pass, value }: { pass: boolean; value: unknown } = await actual.then(
    (value: unknown) => ({ pass: false, value }),
    (value: unknown) => ({ pass: true, value }),
  );

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toReject', 'received', '') +
          '\n\nExpected promise not to reject, however it was rejected with: "' +
          printReceived(value) +
          '".\n'
        : matcherHint('.toReject', 'received', '') +
          '\n\nExpected promise to reject, however it resolved with: "' +
          printReceived(value) +
          '".\n',
  };
}
