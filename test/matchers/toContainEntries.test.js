import * as matcher from "src/matchers/toContainEntries";

expect.extend(matcher);

const data = { a: "foo", b: "bar", c: "baz" };

describe(".toContainEntries", () => {
  test("passes when object contains all of the given entries", () => {
    expect(data).toContainEntries([
      ["c", "baz"],
      ["a", "foo"],
    ]);
  });

  test("fails when object does not contain all of the given entries", () => {
    expect(() => expect(data).toContainEntries(["b", "foo"], ["a", "foo"])).toThrowErrorMatchingSnapshot();
  });
});

describe(".not.toContainEntries", () => {
  test("passes when object does not contain all of the given entries", () => {
    expect(data).not.toContainEntries([["a", "qux"]]);
  });

  test("fails when object contains all of the given entries", () => {
    expect(() =>
      expect(data).not.toContainEntries([
        ["b", "bar"],
        ["c", "baz"],
      ]),
    ).toThrowErrorMatchingSnapshot();
  });
});
