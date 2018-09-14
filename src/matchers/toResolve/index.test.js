import matcher from '.';

expect.extend(matcher);

describe('.toIncludeSameMembers', () => {
  test('passes when passed a promise that resolved', async () => {
    const promise = Promise.resolve();
    await expect(promise).toResolve();
  });
});
