import predicate from './predicate';

describe('toResolve predicate', () => {
  test('should return undefined when passed a promise that resolves', async () => {
    const promise = Promise.resolve();
    expect(await predicate(promise)).toStrictEqual({ pass: true });
  });

  test('should resolve with the error when passed a promise that rejects', async () => {
    const error = new Error();
    const promise = Promise.reject(error);
    expect(await predicate(promise)).toStrictEqual({ pass: false, error });
  });
});
