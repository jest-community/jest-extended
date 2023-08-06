import * as matcher from "src/matchers/toContainKey";

expect.extend(matcher);

const data = { hello: "world" };

describe(".toContainKey", () => {
  test("passes when given object contains key", () => {
    expect(data).toContainKey("hello");
  });

  test("fails when given object does not contain key", () => {
    expect(() => expect(data).toContainKey("missing")).toThrowErrorMatchingSnapshot();
  });
});

describe(".not.toContainKey", () => {
  test("passes when given object does not contain key", () => {
    expect(data).not.toContainKey("missing");
  });

  test("fails when given object contains key", () => {
    expect(() => expect(data).not.toContainKey("hello")).toThrowErrorMatchingSnapshot();
  });
});
