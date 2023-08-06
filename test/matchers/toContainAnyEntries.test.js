import * as matcher from "src/matchers/toContainAnyEntries";

expect.extend(matcher);

const data = { a: "foo", b: "bar", c: "baz" };

describe(".toContainAnyEntries", () => {
  test("passes when given object contains atleast one of the given entries", () => {
    expect(data).toContainAnyEntries([
      ["a", "qux"],
      ["a", "foo"],
    ]);
  });

  test("fails when given object does not contain any of the given entries", () => {
    expect(() =>
      expect(data).toContainAnyEntries([
        ["a", "qux"],
        ["b", "foo"],
      ]),
    ).toThrowErrorMatchingSnapshot();
  });
});

describe(".not.toContainAnyEntries", () => {
  test("passes when given object does not contain any of the given entries", () => {
    expect(data).not.toContainAnyEntries([
      ["a", "qux"],
      ["b", "foo"],
    ]);
  });

  test("fails when given object contains atleast one of the given entries", () => {
    expect(() =>
      expect(data).not.toContainAnyEntries([
        ["a", "qux"],
        ["a", "foo"],
      ]),
    ).toThrowErrorMatchingSnapshot();
  });
});
