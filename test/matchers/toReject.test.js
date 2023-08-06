import * as matcher from "src/matchers/toReject";

expect.extend(matcher);

describe(".toReject", () => {
  test("passes when passed a promise that rejects", async () => {
    const promise = Promise.reject();
    await expect(promise).toReject();
  });

  test("fails when passed a promise that resolved", async () => {
    const promise = Promise.resolve();
    await expect(expect(promise).toReject()).rejects.toThrowErrorMatchingSnapshot();
  });
});

describe(".not.toReject", () => {
  test("fails when passed a promise that rejects", async () => {
    const promise = Promise.reject();
    await expect(expect(promise).not.toReject()).rejects.toThrowErrorMatchingSnapshot();
  });

  test("passes when passed a promise that resolved", async () => {
    const promise = Promise.resolve();
    await expect(promise).not.toReject();
  });
});
