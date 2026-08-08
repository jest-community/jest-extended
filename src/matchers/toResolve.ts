export async function toResolve(actual: Promise<unknown>) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { matcherHint, printReceived } = this.utils;

  const { pass, value }: { pass: boolean; value: unknown } = await actual.then(
    (value: unknown) => ({ pass: true, value }),
    (value: unknown) => ({ pass: false, value }),
  );

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toResolve', 'received', '') +
          '\n\nExpected promise to reject, however it resolved with: "' +
          printReceived(value) +
          '".\n'
        : matcherHint('.toResolve', 'received', '') +
          '\n\nExpected promise to resolve, however it rejected with: "' +
          printReceived(value) +
          '".\n',
  };
}
