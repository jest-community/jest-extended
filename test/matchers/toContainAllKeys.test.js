import * as matcher from "src/matchers/toContainAllKeys";

expect.extend(matcher);

const data = { a: "hello", b: "world" };

describe(".toContainAllKeys", () => {
  test("passes when given object contains all keys", () => {
    expect(data).toContainAllKeys(["a", "b"]);
  });

  test("fails when given object does not contain all keys", () => {
    expect(() => expect(data).toContainAllKeys(["a"])).toThrowErrorMatchingSnapshot();
  });

  test("fails when given an empty object", () => {
    expect(() => expect({}).toContainAllKeys(["a"])).toThrowErrorMatchingSnapshot();
  });

  test("fails when all of the object keys are matched, but there are additional keys ", () => {
    expect(() => expect(data).toContainAllKeys(["a", "c"])).toThrowErrorMatchingSnapshot();
  });
});

describe(".not.toContainAllKeys", () => {
  test("passes when given object does not contain key", () => {
    expect(data).not.toContainAllKeys(["a"]);
  });

  test("fails when given object contains all keys", () => {
    expect(() => expect(data).not.toContainAllKeys(["b", "a"])).toThrowErrorMatchingSnapshot();
  });
});
