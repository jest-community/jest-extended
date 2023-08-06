import * as matcher from "src/matchers/toContainEntry";

expect.extend(matcher);

const data = { a: "foo", b: "bar", c: "baz" };

describe(".toContainEntry", () => {
  test("passes when object contains given entry", () => {
    expect(data).toContainEntry(["a", "foo"]);
    expect(data).toContainEntry(["b", "bar"]);
    expect(data).toContainEntry(["c", "baz"]);
  });

  test("fails when object does not contain given entry", () => {
    expect(() => expect(data).toContainEntry(["b", "foo"])).toThrowErrorMatchingSnapshot();
  });
});

describe(".not.toContainEntry", () => {
  test("passes when object does not contain given entry", () => {
    expect(data).not.toContainEntry(["a", "qux"]);
  });

  test("fails when object contains given entry", () => {
    expect(() => expect(data).not.toContainEntry(["b", "bar"])).toThrowErrorMatchingSnapshot();
  });
});
