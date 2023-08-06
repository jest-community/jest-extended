import * as matcher from "src/matchers/toContainKeys";

expect.extend(matcher);

const data = { a: "foo", b: "bar", c: "baz" };

describe(".toContainKeys", () => {
  test("passes when object contains all keys", () => {
    expect(data).toContainKeys(["b", "c"]);
  });

  test("fails when object does not contain all keys", () => {
    expect(() => expect(data).toContainKeys(["a", "d"])).toThrowErrorMatchingSnapshot();
  });
});

describe(".not.toContainKeys", () => {
  test("passes when object does not contain all keys", () => {
    expect(data).not.toContainKeys(["d"]);
  });

  test("fails when object contains all keys", () => {
    expect(() => expect(data).not.toContainKeys(["a", "b", "c"])).toThrowErrorMatchingSnapshot();
  });
});
