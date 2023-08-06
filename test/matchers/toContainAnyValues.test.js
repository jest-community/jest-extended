import * as matcher from "src/matchers/toContainAnyValues";

expect.extend(matcher);

const data = { a: "foo", b: "bar", c: "baz" };

describe(".toContainAnyValues", () => {
  test("passes when given object contains value", () => {
    expect(data).toContainAnyValues(["foo"]);
    expect(data).toContainAnyValues(["foo", "fax"]);
    expect(data).toContainAnyValues(["qux", "bar"]);
    expect(data).toContainAnyValues(["qux", "baz", "rod"]);
  });

  test("fails when given object does not contain value", () => {
    expect(() => expect(data).toContainAnyValues(["fax"])).toThrowErrorMatchingSnapshot();
    expect(() => expect(data).toContainAnyValues(["fax", "rom"])).toThrowErrorMatchingSnapshot();
    expect(() => expect(data).toContainAnyValues(["dae", "mur", "zoe"])).toThrowErrorMatchingSnapshot();
  });
});

describe(".not.toContainAnyValues", () => {
  test("passes when given object does not contain value", () => {
    expect(data).not.toContainAnyValues(["qux"]);
    expect(data).not.toContainAnyValues(["bui", "mur"]);
  });

  test("fails when given object contains value", () => {
    expect(() => expect(data).not.toContainAnyValues(["baz"])).toThrowErrorMatchingSnapshot();
    expect(() => expect(data).not.toContainAnyValues(["foo", "bar"])).toThrowErrorMatchingSnapshot();
  });
});
