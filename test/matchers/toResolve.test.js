import * as matcher from "src/matchers/toResolve";

expect.extend(matcher);

describe(".toResolve", () => {
  test("passes when passed a promise that resolved", async () => {
    const promise = Promise.resolve();
    await expect(promise).toResolve();
  });

  test("fails when passed a promise that rejects", async () => {
    const promise = Promise.reject();
    await expect(expect(promise).toResolve()).rejects.toThrowErrorMatchingSnapshot();
  });
});

describe(".not.toResolve", () => {
  test("fails when passed a promise that resolved", async () => {
    const promise = Promise.resolve();
    await expect(expect(promise).not.toResolve()).rejects.toThrowErrorMatchingSnapshot();
  });

  test("passes when passed a promise that rejects", async () => {
    const promise = Promise.reject();
    await expect(promise).not.toResolve();
  });
});
