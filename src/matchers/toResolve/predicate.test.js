import predicate from './predicate';

describe('toResolve predicate', () => {
  test('should return true when passed a promise that resolves', async () => {
    const promise = Promise.resolve();
    expect(await predicate(promise)).toBe(true);
  });

  test('should return false when passed a promise that rejects', async () => {
    const promise = Promise.reject();
    expect(await predicate(promise)).toBe(false);
  });
});
