import * as matcher from "src/matchers/toContainValue";

expect.extend(matcher);

const shallow = { hello: "world" };
const deep = { message: shallow };
const deepArray = { message: [shallow] };

describe(".toContainValue", () => {
  test("passes when given object contains primitive value", () => {
    expect(shallow).toContainValue("world");
  });

  test("passes when given object contains falsy primitive value", () => {
    expect({ foo: false }).toContainValue(false);
  });

  test("passes when given object contains object value", () => {
    expect(deep).toContainValue({ hello: "world" });
  });

  test("passes when given object contains array value", () => {
    expect(deepArray).toContainValue([{ hello: "world" }]);
  });

  test("fails when given object does not contain primitive value", () => {
    expect(() => expect(shallow).toContainValue("hello")).toThrowErrorMatchingSnapshot();
  });

  test("fails when given object does not contain object value", () => {
    expect(() => expect(deep).toContainValue({ world: "hello" })).toThrowErrorMatchingSnapshot();
  });

  test("fails when given object does not contain array value", () => {
    expect(() => expect(deepArray).toContainValue([{ world: "hello" }])).toThrowErrorMatchingSnapshot();
  });
});

describe(".not.toContainValue", () => {
  const shallow = { hello: "world" };
  const deep = { message: shallow };
  const deepArray = { message: [shallow] };

  test("passes when given object does not contain primitive value", () => {
    expect(shallow).not.toContainValue("foo");
  });

  test("passes when given object does not contain object value", () => {
    expect(deep).not.toContainValue({ foo: "bar" });
  });

  test("passes when given object does not contain array value", () => {
    expect(deepArray).not.toContainValue([{ foo: "bar" }]);
  });

  test("fails when given object contains primitive value", () => {
    expect(() => expect(shallow).not.toContainValue("world")).toThrowErrorMatchingSnapshot();
  });

  test("fails when given object contains object value", () => {
    expect(() => expect(deep).not.toContainValue({ hello: "world" })).toThrowErrorMatchingSnapshot();
  });

  test("fails when given object contains array value", () => {
    expect(() => expect(deepArray).not.toContainValue([{ hello: "world" }])).toThrowErrorMatchingSnapshot();
  });
});
