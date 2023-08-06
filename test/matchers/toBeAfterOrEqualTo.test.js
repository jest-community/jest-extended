import * as matcher from "src/matchers/toBeAfterOrEqualTo";

expect.extend(matcher);

const EARLIER = new Date("2019-09-01T22:00:00.000Z");
const LATER = new Date("2019-09-10T22:00:00.000Z");

describe(".toBeAfterOrEqualTo", () => {
  test("passes when given a later date", () => {
    expect(LATER).toBeAfterOrEqualTo(EARLIER);
  });

  test("passes when given an equal date", () => {
    expect(EARLIER).toBeAfterOrEqualTo(EARLIER);
  });

  test("fails when given an earlier date", () => {
    expect(() => {
      expect(EARLIER).toBeAfterOrEqualTo(LATER);
    }).toThrowErrorMatchingSnapshot();
  });
});

describe(".not.toBeAfterOrEqualTo", () => {
  test("passes when given an earlier date", () => {
    expect(EARLIER).not.toBeAfterOrEqualTo(LATER);
  });

  test("fails when given a later date", () => {
    expect(() => {
      expect(LATER).not.toBeAfterOrEqualTo(EARLIER);
    }).toThrowErrorMatchingSnapshot();
  });

  test("fails when given an equal date", () => {
    expect(() => {
      expect(EARLIER).not.toBeAfterOrEqualTo(EARLIER);
    }).toThrowErrorMatchingSnapshot();
  });
});
