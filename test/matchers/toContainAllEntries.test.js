import * as matcher from "src/matchers/toContainAllEntries";

expect.extend(matcher);

const data = { a: "foo", b: "bar", c: "baz" };

describe(".toContainAllEntries", () => {
  test("passes when object only contains all of the given entries", () => {
    expect(data).toContainAllEntries([
      ["a", "foo"],
      ["b", "bar"],
      ["c", "baz"],
    ]);
  });

  test("fails when object does not only contain all of the given entries", () => {
    expect(() =>
      expect(data).toContainAllEntries([
        ["a", "foo"],
        ["b", "bar"],
      ]),
    ).toThrowErrorMatchingSnapshot();
  });
});

describe(".not.toContainAllEntries", () => {
  test("passes when object does not only contain all of the given entries", () => {
    expect(data).not.toContainAllEntries([
      ["a", "qux"],
      ["b", "bar"],
      ["c", "baz"],
    ]);
  });

  test("fails when object only contains all of the given entries", () => {
    expect(() =>
      expect(data).not.toContainAllEntries([
        ["b", "bar"],
        ["a", "foo"],
        ["c", "baz"],
      ]),
    ).toThrowErrorMatchingSnapshot();
  });
});
