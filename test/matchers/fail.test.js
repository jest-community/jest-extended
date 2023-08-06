import * as matcher from "src/matchers/fail";

expect.extend(matcher);

describe(".fail", () => {
  test("fails without message", () => {
    expect(() => expect().fail()).toThrowErrorMatchingSnapshot();
  });
  test("fails with message", () => {
    expect(() => expect().fail("This shouldn't fail!")).toThrowErrorMatchingSnapshot();
  });
});

describe(".not.fail", () => {
  test("does not fail without message", () => {
    expect().not.fail();
  });
  test("does not fail with message", () => {
    expect().not.fail("this should fail!");
  });
});
