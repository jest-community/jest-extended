import * as matcher from "src/matchers/toContainAnyKeys";

expect.extend(matcher);

const testObject = {
  name: "Steve the Pirate",
  age: 37,
};

describe(".toContainAnyKeys", () => {
  test("passes when object contains one or more keys", () => {
    expect(testObject).toContainAnyKeys(["name"]);
  });

  test("fails when object does not contain any keys", () => {
    expect(() => expect(testObject).toContainAnyKeys(["occupation"])).toThrowErrorMatchingSnapshot();
  });
});

describe(".not.toContainAnyKeys", () => {
  test("passes when object does not contain any keys", () => {
    expect(testObject).not.toContainAnyKeys(["occupation"]);
  });

  test("fails when object contains one or more keys", () => {
    expect(() => expect(testObject).not.toContainAnyKeys(["name", "age"])).toThrowErrorMatchingSnapshot();
  });
});
